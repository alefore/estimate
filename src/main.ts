import {Book, books} from './books.js';
import {EmojiButton} from './button.js';
import {Category, createCategoryFilter, emojiForCategory} from './category.js';
import {companies, Company} from './companies.js';
import {createDifficultySelector, type Difficulty, DIFFICULTY_FILTERS} from './difficulty.js';
import {FamousBirth, famousBirths} from './famous_persons.js';
import {Film, films} from './films.js';
import {Game} from './game.js';
import {HistoricalEvent, historicalEvents} from './historical_events.js';
import {HistoryManager} from './history.js';
import {Invention, inventions} from './inventions.js';
import {Computed, Signal} from './listener.js';
import {Painting, paintings} from './paintings.js';
import {UnitEntry} from './question.js';
import {Settings} from './settings.js';
import {SettingsManager} from './settings_manager.js';
import {Structure, structures} from './structures.js';

class Unit {
  constructor(public readonly name: string) {}
}

function randomGaussian(mean: number, stdDev: number): number {
  const u = 1 - Math.random();  // Prevents Math.log(0)
  const v = Math.random();
  return mean +
      Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * stdDev;
}

const cssInvisible = 'invisible';

class App {
  readonly historyManager: HistoryManager = new HistoryManager();
  readonly settingsManager: SettingsManager =
      new SettingsManager(this.validateUniqueIds(
          historicalEvents
              .map((h: HistoricalEvent): UnitEntry => ({
                     name: h.name,
                     shortName: h.shortName,
                     value: h.value,
                     category: Category.HistoricalEvent,
                     difficulty: h.difficulty,
                     topic: h.topic,
                     id: h.id,
                     link: h.link,
                   }))
              .concat(famousBirths.map((b: FamousBirth): UnitEntry => ({
                                         name: `${b.name} was born`,
                                         shortName: b.name,
                                         value: b.value,
                                         topic: [b.name],
                                         category: Category.Birth,
                                         id: b.id,
                                         difficulty: b.difficulty,
                                         link: b.link,
                                       })))
              .concat(companies.map((c: Company): UnitEntry => ({
                                      name: `${c.name} was founded`,
                                      shortName: c.name,
                                      value: c.year,
                                      category: Category.Company,
                                      topic: [],
                                      id: c.id,
                                      difficulty: c.difficulty,
                                      link: c.link,
                                    })))
              .concat(
                  books.map((b: Book): UnitEntry => ({
                              name: `${b.title} (by ${b.author}) was published`,
                              shortName: b.title,
                              value: b.year,
                              topic: [b.author],
                              category: Category.Book,
                              id: b.id,
                              difficulty: b.difficulty,
                              link: b.link,
                            })))
              .concat(inventions.map(
                  (i: Invention): UnitEntry => ({
                    name: `${i.name} was invented` +
                        (i.inventor ? ` (by ${i.inventor})` : ''),
                    shortName: i.name,
                    value: i.year,
                    topic: i.inventor?[i.inventor]: [],
                    category: Category.Invention,
                    id: i.id,
                    difficulty: i.difficulty,
                    link: i.link,
                  })))
              .concat(paintings.map((p: Painting): UnitEntry => ({
                                      name: `${p.artist} finished ${p.title}`,
                                      shortName: p.title,
                                      value: p.year,
                                      topic: [p.artist],
                                      category: Category.Painting,
                                      id: p.id,
                                      difficulty: p.difficulty,
                                      link: p.link,
                                    })))
              .concat(structures.map(
                  (s: Structure): UnitEntry => ({
                    name: `${s.name} (${s.country}) was built (finished)`,
                    shortName: s.name,
                    value: s.year,
                    topic: [s.name],
                    category: Category.Structure,
                    id: s.id,
                    difficulty: s.difficulty,
                    link: s.link,
                  })))
              .concat(
                  films.map((f: Film): UnitEntry => ({
                              name: `${f.title} (${f.director}) was released`,
                              shortName: f.title,
                              value: f.year,
                              category: Category.Film,
                              topic: [f.director],
                              id: f.id,
                              difficulty: f.difficulty,
                              link: f.link,
                            })))
              .sort((a, b) => a.value - b.value)));
  readonly titleDiv =
      Object.assign(document.createElement('div'), {id: 'title'});
  readonly menuDiv = Object.assign(document.createElement('div'), {id: 'menu'});
  readonly historyDiv =
      Object.assign(document.createElement('div'), {id: 'history'});
  readonly gameDiv = Object.assign(document.createElement('div'), {id: 'game'});

  constructor() {
    const yearUnit = new Unit('Year');
    const topMenuHeader = document.createElement('h1');
    const topMenuButton = Object.assign(document.createElement('button'), {
      id: 'top-menu',
      textContent: '☰ est.alejo.ch',
      title: 'Back to the main menu'
    });
    topMenuButton.addEventListener('click', (event: MouseEvent) => {
      if (!this.menuDiv.classList.contains(cssInvisible)) return;
      history.back();
    });
    topMenuHeader.append(topMenuButton);
    this.titleDiv.append(topMenuHeader);

    this.addMenuButton(
        '🚀', 'Play', 'Start a new game.', () => this.startGame());
    this.addMenuButton(
        '📊', 'History', 'Show statitics about all games played.',
        () => this.show(this.historyDiv));
    this.addMenuButton(
        '⚙️', 'Settings', 'Show settings dialogue.',
        () => this.show(this.settingsManager.container));
    this.addMenuButton(
        '❓', 'About', 'Show information about the game.',
        () => window.location.href = 'https://alejo.ch/3m9');

    document.body.append(
        this.titleDiv, this.menuDiv, this.historyDiv, this.gameDiv,
        this.settingsManager.container);

    // Avoid optimization from `this.show` that would otherwise not do anything.
    this.menuDiv.classList.add(cssInvisible);
    this.show(this.menuDiv);

    new Computed(() => {
      this.historyManager.displayHistory(this.historyDiv);
    }).alwaysFresh();

    this.settingsManager.doneEvent.subscribe(() => {
      history.back();
    });

    window.addEventListener('popstate', () => this.show(this.menuDiv));
  }

  private validateUniqueIds(data: UnitEntry[]): UnitEntry[] {
    const idTracker = new Map<number, string[]>();

    data.forEach((entry: UnitEntry) => {
      if (!entry.id) return;
      const existingNames = idTracker.get(entry.id) || [];
      existingNames.push(entry.name);
      idTracker.set(entry.id, existingNames);
    });

    const errorMessages: string[] = [];
    const formatter =
        new Intl.ListFormat('en', {style: 'long', type: 'conjunction'});

    for (const [id, names] of idTracker.entries()) {
      if (names.length > 1) {
        errorMessages.push(
            `Id ${id} found for entries ${formatter.format(names)}`);
      }
    }

    if (errorMessages.length > 0) {
      throw new Error(errorMessages.join('. ') + '.');
    }
    return data;
  }

  show(div: HTMLDivElement) {
    if (!div.classList.contains(cssInvisible)) return;
    document.querySelectorAll('body > div')
        .forEach((d) => d.classList.add(cssInvisible));
    div.classList.remove(cssInvisible);
    if (div !== this.menuDiv) history.pushState(null, '');
  }

  addMenuButton(
      emoji: string, text: string, title: string, handler: () => void): void {
    const button = new EmojiButton(emoji, text, title);
    button.clickEvent.subscribe(handler);
    this.menuDiv.append(button.button);
  }

  gameDone(game: Game) {}

  startGame() {
    this.show(this.gameDiv);
    const game =
        new Game(this.settingsManager, this.historyManager, this.gameDiv);
    new Computed(() => {
      const record = game.scoreSignal.value;
      if (!record) return;

      const doneButton =
          new EmojiButton('✔️ ', 'Done', 'Go back to the main menu.');
      doneButton.clickEvent.subscribe(() => {
        history.back();
      });
      this.gameDiv.prepend(doneButton.button);

      const results = this.historyManager.displayRecord(record);
      results.open = true;
      this.gameDiv.prepend(results);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }).alwaysFresh();
  }
}

// const xquestionInputs: QuestionInput[] = [
//   {question: 'Alejo was born in Argentina', correctAnswer: false},
//   {
//     question:
//         'Brazil is more than 100 times bigger (land area) than
//         Switzerland',
//     correctAnswer: true
//   },
//   {
//     question:
//         '20 <= number of Swiss cantons <= 30 (counting half-cantons as
//         0.5)',
//     correctAnswer: true
//   },
//   {
//     question: 'Switzerland has borders with exactly 5 countries',
//     correctAnswer: true
//   },
//   {
//     question: 'Less than 15% of the Alps (land area) is in Switzerland',
//     correctAnswer: true
//   },
//   {
//     question: 'The world\'s first website had a ".ch" domain name.',
//     correctAnswer: true
//   },
//   {question: '1900 <= Nintendo was founded < 2000', correctAnswer: false},
//   {
//     question: 'The term "robot" was coined by a Polish writer',
//     correctAnswer: false
//   },
//   {
//     question: 'Smartphones with built-in GPS were released in 1996',
//     correctAnswer: false
//   },
// ];

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
