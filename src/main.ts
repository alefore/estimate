import {Book, books} from './books.js';
import {FamousBirth, famousBirths} from './famous_persons.js';
import {Film, films} from './films.js';
import {historicalEvents} from './historical_events.js';
import {displayHistory, GameRecord, loadHistory, saveGame} from './history.js';
import {Invention, inventions} from './inventions.js';
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
  readonly data = new Map<Unit, UnitEntry[]>();
  readonly titleDiv =
      Object.assign(document.createElement('div'), {id: 'title'});
  readonly menuDiv = Object.assign(document.createElement('div'), {id: 'menu'});
  readonly historyDiv =
      Object.assign(document.createElement('div'), {id: 'history'});
  readonly gameDiv = document.createElement('div');

  constructor() {
    const yearUnit = new Unit('Year');
    this.data.set(
        yearUnit,
        historicalEvents
            .concat(famousBirths.map((b: FamousBirth) => ({
                                       name: `👶 ${b.name} was born`,
                                       value: b.value,
                                       id: b.name
                                     })))
            .concat(
                books.map((b: Book) => ({
                            name: `${b.title} (by ${b.author}) was published`,
                            value: b.year
                          })))
            .concat(
                inventions.map((i: Invention) => ({
                                 name: `${i.name} was invented` +
                                     (i.inventor ? ` (by ${i.inventor})` : ''),
                                 value: i.year,
                                 id: i.inventor
                               })))
            .concat(paintings.map((p: Painting) => ({
                                    name: `🎨 ${p.artist} finished ${p.title}`,
                                    value: p.year,
                                    id: p.artist
                                  })))
            .concat(structures.map(
                (s: Structure) => ({
                  name: `🏛️  ${s.name} (${s.country}) was built (finished)`,
                  value: s.year
                })))
            .concat(
                films.map((f: Film) => ({
                            name: `🎥 ${f.title} (${f.director}) was released`,
                            value: f.year
                          })))
            .sort((a, b) => a.value - b.value));

    const topMenuButton = document.createElement('button');
    topMenuButton.textContent = '☰';
    topMenuButton.addEventListener(
        'click', (event: MouseEvent) => this.show(this.menuDiv));

    this.titleDiv.append(
        topMenuButton,
        Object.assign(
            document.createElement('h1'), {textContent: 'Estimates'}));

    this.addMenuButton('🚀', 'Play', () => this.startGame());
    this.addMenuButton('📊', 'History', () => this.showHistory());

    document.body.append(
        this.titleDiv, this.menuDiv, this.historyDiv, this.gameDiv);

    this.show(this.menuDiv);

    const records: GameRecord[] = loadHistory();
    if (records.length > 0) displayHistory(records);
  }

  show(div: HTMLDivElement) {
    document.querySelectorAll('body > div')
        .forEach((d) => d.classList.add(cssInvisible));
    this.titleDiv.classList.remove(cssInvisible);
    div.classList.remove(cssInvisible);
  }

  generateQuestion(): CompareQuestion {
    const units = Array.from(this.data.keys());
    if (units.length === 0) throw new Error('Data map is empty.');

    const entries =
        this.data.get(units[Math.floor(Math.random() * units.length)])!;
    if (entries.length < 2) throw new Error('Not enough entries to compare.');

    const base = entries[Math.floor(Math.random() * entries.length)];

    const minYear = entries[0].value;
    const maxYear = entries[entries.length - 1].value;
    if (minYear === maxYear) {
      throw new Error(
          'All entries occur in the exact same year. Cannot generate a comparison.');
    }

    const currentYear = new Date().getFullYear();
    // 20% of elapsed time or at least 5 years.
    const targetDistance = Math.max(5, (currentYear - base.value) * 0.20);

    let targetYear: number;
    do {
      targetYear = randomGaussian(base.value, targetDistance);
    } while (targetYear < minYear || targetYear > maxYear);

    const nearest10 =
        entries.filter(entry => entry.value !== base.value)
            .filter(entry => !base.id || !entry.id || base.id !== entry.id)
            .sort(
                (a, b) => Math.abs(a.value - targetYear) -
                    Math.abs(b.value - targetYear))
            .slice(0, 10);

    if (nearest10.length === 0) {
      throw new Error('Could not find a second entry with a different value.');
    }

    return new CompareQuestion(
        base, nearest10[Math.floor(Math.random() * nearest10.length)]);
  }

  addMenuButton(emoji: string, text: string, handler: () => void): void {
    const button = document.createElement('button');
    button.append(
        Object.assign(document.createElement('span'), {textContent: emoji}),
        Object.assign(document.createElement('span'), {textContent: text}),
    );
    button.addEventListener('click', (event: MouseEvent) => handler());
    this.menuDiv.append(button);
  }

  gameDone(questions: QuestionView[]) {
    questions.forEach((q) => q.reveal());

    const button = document.createElement('button');
    button.textContent = 'Done';
    button.addEventListener('click', (event: MouseEvent) => {
      this.show(this.menuDiv);
    });

    saveGame(
        questions.map((q) => Number(q.slider.value) / 100),
        questions.filter((q) => q.question.isCorrect()).length);
  }

  startGame() {
    this.show(this.gameDiv);
    this.gameDiv.replaceChildren();
    const questionInputs =
        Array.from({length: 10}, () => this.generateQuestion());
    const questions: QuestionView[] = questionInputs.map((q) => {
      return new QuestionView(q, this.gameDiv);
    });

    const button = document.createElement('button');
    button.textContent = '✔️ Finish';
    button.addEventListener('click', (event: MouseEvent) => {
      this.gameDone(questions);
      button.remove();
    });
    this.gameDiv.append(button);
  }

  showHistory() {
    this.show(this.historyDiv);
    displayHistory(loadHistory());
  }
}

// const xquestionInputs: QuestionInput[] = [
//   {question: 'Alejo was born in Argentina', correctAnswer: false},
//   {
//     question:
//         'Brazil is more than 100 times bigger (land area) than Switzerland',
//     correctAnswer: true
//   },
//   {
//     question:
//         '20 <= number of Swiss cantons <= 30 (counting half-cantons as 0.5)',
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
