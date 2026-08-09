import {Book, books} from './books.js';
import {emojiButton} from './button.js';
import {Category, createCategoryFilter, emojiForCategory} from './category.js';
import {companies, Company} from './companies.js';
import {createDifficultySelector, type Difficulty, DIFFICULTY_FILTERS, difficultyDistanceRatios} from './difficulty.js';
import {FamousBirth, famousBirths} from './famous_persons.js';
import {Film, films} from './films.js';
import {HistoricalEvent, historicalEvents} from './historical_events.js';
import {displayHistory, displayRecord, GameRecord, loadHistory, saveGame} from './history.js';
import {Invention, inventions} from './inventions.js';
import {Computed, Signal} from './listener.js';
import {Painting, paintings} from './paintings.js';
import {CompareQuestion, QuestionView, UnitEntry} from './question.js';
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
  readonly allEntries: UnitEntry[] =
      historicalEvents
          .map((h: HistoricalEvent): UnitEntry => ({
                 name: h.name,
                 value: h.value,
                 category: Category.HistoricalEvent,
                 difficulty: h.difficulty,
               }))
          .concat(famousBirths.map((b: FamousBirth): UnitEntry => ({
                                     name: `${b.name} was born`,
                                     value: b.value,
                                     id: b.name,
                                     category: Category.Birth,
                                     difficulty: b.difficulty
                                   })))
          .concat(companies.map((c: Company): UnitEntry => ({
                                  name: `${c.name} was founded`,
                                  value: c.year,
                                  category: Category.Company
                                })))
          .concat(books.map((b: Book): UnitEntry => ({
                              name: `${b.title} (by ${b.author}) was published`,
                              value: b.year,
                              category: Category.Book
                            })))
          .concat(
              inventions.map((i: Invention): UnitEntry => ({
                               name: `${i.name} was invented` +
                                   (i.inventor ? ` (by ${i.inventor})` : ''),
                               value: i.year,
                               id: i.inventor,
                               category: Category.Invention
                             })))
          .concat(paintings.map((p: Painting): UnitEntry => ({
                                  name: `${p.artist} finished ${p.title}`,
                                  value: p.year,
                                  id: p.artist,
                                  category: Category.Painting
                                })))
          .concat(structures.map(
              (s: Structure): UnitEntry => ({
                name: `${s.name} (${s.country}) was built (finished)`,
                value: s.year,
                category: Category.Structure
              })))
          .concat(films.map((f: Film): UnitEntry => ({
                              name: `${f.title} (${f.director}) was released`,
                              value: f.year,
                              category: Category.Film
                            })))
          .sort((a, b) => a.value - b.value);
  readonly titleDiv =
      Object.assign(document.createElement('div'), {id: 'title'});
  readonly menuDiv = Object.assign(document.createElement('div'), {id: 'menu'});
  readonly historyDiv =
      Object.assign(document.createElement('div'), {id: 'history'});
  readonly gameDiv = Object.assign(document.createElement('div'), {id: 'game'});
  readonly settingsDiv =
      Object.assign(document.createElement('div'), {id: 'settings'});
  readonly categorySignals: ReadonlyMap<Category, Signal<boolean>> =
      new Map(Object.values(Category).map(
          (value) => [value, new Signal<boolean>(true)]));
  readonly enabledEntries: Computed<UnitEntry[]> = new Computed(() => {
    const difficultyFilter = DIFFICULTY_FILTERS[this.difficultySignal.value];
    return this.allEntries
        .filter((u) => this.categorySignals.get(u.category)!.value)
        .filter((u) => !u.difficulty || difficultyFilter(u.difficulty));
  });
  readonly difficultySignal: Signal<Difficulty> = new Signal('medium');

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
        () => this.show(this.settingsDiv));
    this.addMenuButton(
        '❓', 'About', 'Show information about the game.',
        () => window.location.href = 'https://alejo.ch/3m9');

    document.body.append(
        this.titleDiv, this.menuDiv, this.historyDiv, this.gameDiv,
        this.settingsDiv);

    this.show(this.menuDiv);

    this.buildSettingsDiv();
    const records: GameRecord[] = loadHistory();
    if (records.length > 0) displayHistory(records);
    this.enabledEntries.alwaysFresh();
  }

  buildSettingsDiv() {
    this.settingsDiv.append(
        Object.assign(document.createElement('h2'), {textContent: 'Settings'}));

    this.settingsDiv.append(
        createDifficultySelector('medium', this.difficultySignal));

    this.settingsDiv.append(
        createCategoryFilter(this.categorySignals, this.enabledEntries));
  }

  show(div: HTMLDivElement) {
    document.querySelectorAll('body > div')
        .forEach((d) => d.classList.add(cssInvisible));
    this.titleDiv.classList.remove(cssInvisible);
    div.classList.remove(cssInvisible);
  }

  generateQuestion(): CompareQuestion {
    const distanceRatio = difficultyDistanceRatios[this.difficultySignal.value];
    const enabled = this.enabledEntries.value;
    const entries = enabled.length ? enabled : this.allEntries;
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
            .filter(entry => !base.id || !entry.id || base.id !== entry.id)
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
    return new CompareQuestion(base, targetEntry);
  }

  addMenuButton(
      emoji: string, text: string, title: string, handler: () => void): void {
    this.menuDiv.append(emojiButton(emoji, text, title, handler));
  }

  gameDone(allQuestions: QuestionView[]) {
    allQuestions.forEach((q) => q.reveal());
    const questions = allQuestions.filter((q) => q.confidence > 50);

    const record: GameRecord = {
      date: new Date().toISOString(),
      confidences: questions.map((q) => q.confidence / 100),
      correctCount: questions.filter((q) => q.question.isCorrect()).length,
      skips: allQuestions.length - questions.length
    };

    saveGame(record);

    this.gameDiv.prepend(
        emojiButton('✔️ ', 'Done', 'Go back to the main menu.', () => {
          this.show(this.menuDiv);
        }));

    const results = displayRecord(record);
    results.open = true;
    this.gameDiv.prepend(results);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  startGame() {
    this.show(this.gameDiv);
    this.gameDiv.replaceChildren();
    const questionInputs =
        Array.from({length: 10}, () => this.generateQuestion());
    const questions: QuestionView[] = questionInputs.map((q) => {
      return new QuestionView(q, this.gameDiv);
    });

    const finishButton = emojiButton(
        '✔️ ', 'Finish', 'End the game and show the results.', () => {
          this.gameDone(questions);
          finishButton.remove();
        });
    this.gameDiv.append(finishButton);
  }

  showHistory() {
    this.show(this.historyDiv);
    const history: GameRecord[] = loadHistory();
    if (history.length > 0) {
      displayHistory(history);
    } else {
      this.historyDiv.replaceChildren(Object.assign(
          document.createElement('p'), {textContent: 'History is empty.'}));
    }
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
