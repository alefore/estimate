import {Book, books} from './books.js';
import {EmojiButton} from './button.js';
import {Category, createCategoryFilter, emojiForCategory} from './category.js';
import {companies, Company} from './companies.js';
import {createDifficultySelector, type Difficulty, DIFFICULTY_FILTERS, difficultyDistanceRatios} from './difficulty.js';
import {FamousBirth, famousBirths} from './famous_persons.js';
import {Film, films} from './films.js';
import {HistoricalEvent, historicalEvents} from './historical_events.js';
import {HistoryManager} from './history.js';
import {Invention, inventions} from './inventions.js';
import {Computed, Signal} from './listener.js';
import {Painting, paintings} from './paintings.js';
import {CompareQuestion, QuestionView, UnitEntry} from './question.js';
import {SettingsManager} from './settings.js';
import {GameRecord} from './storage.js';
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
      textContent: '☰ Estimates',
      title: 'Back to the main menu'
    });
    topMenuButton.addEventListener(
        'click', (event: MouseEvent) => this.show(this.menuDiv));
    topMenuHeader.append(topMenuButton);
    this.titleDiv.append(topMenuHeader);

    this.addMenuButton(
        '🚀', 'Play', 'Start a new game.', () => this.startGame());
    this.addMenuButton(
        '📊', 'History', 'Show statitics about all games played.',
        () => this.showHistory());
    this.addMenuButton(
        '⚙️', 'Settings', 'Show settings dialogue.',
        () => this.show(this.settingsManager.container));
    this.addMenuButton(
        '❓', 'About', 'Show information about the game.',
        () => window.location.href = 'https://alejo.ch/3m9');

    document.body.append(
        this.titleDiv, this.menuDiv, this.historyDiv, this.gameDiv,
        this.settingsManager.container);

    this.show(this.menuDiv);

    new Computed(() => {
      this.historyManager.displayHistory(this.historyDiv);
    }).alwaysFresh();
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
    console.log(data);
    return data;
  }

  show(div: HTMLDivElement) {
    document.querySelectorAll('body > div')
        .forEach((d) => d.classList.add(cssInvisible));
    this.titleDiv.classList.remove(cssInvisible);
    div.classList.remove(cssInvisible);
  }

  generateQuestion(): CompareQuestion {
    const distanceRatio =
        difficultyDistanceRatios[this.settingsManager.difficulty.value];
    const entries = this.settingsManager.enabledEntries.value;
    if (entries.length < 2) throw new Error('Not enough entries to compare.');

    const base = entries[Math.floor(Math.random() * entries.length)];

    const minYear = entries[0].value;
    const maxYear = entries[entries.length - 1].value;
    if (minYear === maxYear)
      throw new Error(
          'All entries occur in the exact same year. Cannot generate a comparison.');

    const currentYear = new Date().getFullYear();
    // 20% of elapsed time or at least 5 years.
    const targetDistance =
        Math.max(5, (currentYear - base.value) * distanceRatio);
    const targetA = base.value - targetDistance;
    const targetB = base.value + targetDistance;
    const sigma = targetDistance * 0.5;

    const entriesByYear: Map<number, UnitEntry[]> =
        entries.filter(entry => entry.value !== base.value)
            .filter(entry => base.topic.every(t => !entry.topic.includes(t)))
            .reduce((acc, entry) => {
              if (!acc.has(entry.value)) acc.set(entry.value, []);
              acc.get(entry.value)!.push(entry);
              return acc;
            }, new Map<number, UnitEntry[]>());

    if (entriesByYear.size === 0)
      throw new Error('Could not find a second entry with a different value.');

    const yearWeights = Array.from(entriesByYear.keys()).map(year => {
      const minDistance =
          Math.min(Math.abs(year - targetA), Math.abs(year - targetB));
      return {year, weight: Math.exp(-0.5 * Math.pow(minDistance / sigma, 2))};
    });

    const totalWeight = yearWeights.reduce((sum, yw) => sum + yw.weight, 0);

    let randomVal = Math.random() * totalWeight;
    const selectedYear = yearWeights
                             .find(yw => {
                               randomVal -= yw.weight;
                               return randomVal <= 0;
                             })
                             ?.year ??
        yearWeights[0].year;

    const yearEntries = entriesByYear.get(selectedYear)!;
    const targetEntry =
        yearEntries[Math.floor(Math.random() * yearEntries.length)];
    return new CompareQuestion([base, targetEntry]);
  }

  addMenuButton(
      emoji: string, text: string, title: string, handler: () => void): void {
    this.menuDiv.append(new EmojiButton(emoji, text, title, handler).button);
  }

  gameDone(allQuestions: QuestionView[]) {
    allQuestions.forEach((q) => q.reveal());
    const questions =
        allQuestions.filter((q) => q.confidenceButtons.confidence.value! > 50);

    const record: GameRecord = {
      date: new Date().toISOString(),
      answers: questions.map((q) => {
        const index = q.question.selectionIndex.value;
        if (index === null) throw new Error('Question is not answered.');
        return {
          questionId0: q.question.idQuestion0(),
          questionId1: q.question.idQuestion1(),
          indexFirst: index,
          confidence: q.confidenceButtons.confidence.value! / 100,
          correct: q.question.isCorrect()
        };
      }),
    };

    this.historyManager.saveGame(record);

    this.gameDiv.prepend(
        new EmojiButton('✔️ ', 'Done', 'Go back to the main menu.', () => {
          this.show(this.menuDiv);
        }).button);

    const results = this.historyManager.displayRecord(record);
    results.open = true;
    this.gameDiv.prepend(results);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  startGame() {
    this.show(this.gameDiv);
    this.gameDiv.replaceChildren();
    const questionInputs = Array.from(
        {length: this.settingsManager.questionsPerGame.value},
        () => this.generateQuestion());
    const questions: QuestionView[] = questionInputs.map((q, index) => {
      return new QuestionView(q, index, this.gameDiv);
    });

    const finishButton = new EmojiButton(
        '✔️ ', 'Finish', 'End the game and show the results.', () => {
          this.gameDone(questions);
          finishButton.button.remove();
        });
    this.gameDiv.append(finishButton.button);

    new Computed(() => {
      const pendingQuestions =
          questions
              .filter(
                  (q) => q.question.selectionIndex.value === null ||
                      q.confidenceButtons.confidence.value === null)
              .length;
      finishButton.updateText(
          pendingQuestions === 0 ? 'Finish' :
                                   `Questions pending: ${pendingQuestions}`);
      finishButton.setDisabled(pendingQuestions > 0);
    }).alwaysFresh();
  }

  showHistory() {
    this.show(this.historyDiv);
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
