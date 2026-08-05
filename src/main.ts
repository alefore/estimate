import {Book, books} from './books.js';
import {FamousBirth, famousBirths} from './famous_persons.js';
import {historicalEvents} from './historical_events.js';
import {displayHistory, GameRecord, loadHistory, saveGame} from './history.js';
import {Invention, inventions} from './inventions.js';
import {Painting, paintings} from './paintings.js';
import {CompareQuestion, QuestionView, UnitEntry} from './question.js';
import {Structure, structures} from './structures.js';

class Unit {
  constructor(public readonly name: string) {}
}

const data = new Map<Unit, UnitEntry[]>();

const yearUnit = new Unit('Year');

data.set(
    yearUnit,
    historicalEvents
        .concat(famousBirths.map(
            (b: FamousBirth) =>
                ({name: `${b.name} was born`, value: b.value, id: b.name})))
        .concat(books.map((b: Book) => ({
                            name: `${b.title} (by ${b.author}) was published`,
                            value: b.year,
                            id: b.author
                          })))
        .concat(inventions.map((i: Invention) => ({
                                 name: `${i.name} was invented` +
                                     (i.inventor ? ` (by ${i.inventor})` : ''),
                                 value: i.year,
                                 id: i.inventor
                               })))
        .concat(paintings.map((p: Painting) => ({
                                name: `${p.artist} finished ${p.title}`,
                                value: p.year,
                                id: p.artist
                              })))
        .concat(structures.map(
            (s: Structure) => ({
              name: `${s.name} (${s.country}) was built (finished)`,
              value: s.year
            })))
        .sort((a, b) => a.value - b.value));

function randomGaussian(mean: number, stdDev: number): number {
  const u = 1 - Math.random();  // Prevents Math.log(0)
  const v = Math.random();
  return mean +
      Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * stdDev;
}

function generateQuestion(data: Map<Unit, UnitEntry[]>): CompareQuestion {
  const units = Array.from(data.keys());
  if (units.length === 0) throw new Error('Data map is empty.');

  const entries = data.get(units[Math.floor(Math.random() * units.length)])!;
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

function startGameButton(gameDiv: HTMLDivElement) {
  const button = document.createElement('button');
  button.textContent = 'Start new game';
  button.addEventListener('click', (event: MouseEvent) => startGame(gameDiv));
  return button;
}

function gameDone(questions: QuestionView[], gameDiv: HTMLDivElement) {
  gameDiv.append(startGameButton(gameDiv));
  questions.forEach((q) => q.reveal());

  const records: GameRecord[] = saveGame(
      questions.map((q) => Number(q.slider.value) / 100),
      questions.filter((q) => q.question.isCorrect()).length);

  displayHistory(records);
}

function startGame(gameDiv: HTMLDivElement) {
  gameDiv.replaceChildren();
  const questionInputs = Array.from({length: 10}, () => generateQuestion(data));
  const questions: QuestionView[] = questionInputs.map((q) => {
    return new QuestionView(q, gameDiv);
  });

  const button = document.createElement('button');
  button.textContent = 'Finish';
  button.addEventListener('click', (event: MouseEvent) => {
    gameDone(questions, gameDiv);
    button.remove();
  });
  gameDiv.append(button);
}

document.addEventListener('DOMContentLoaded', () => {
  const historyDiv =
      Object.assign(document.createElement('div'), {id: 'history'});

  const gameDiv = document.createElement('div');
  gameDiv.append(startGameButton(gameDiv));

  document.body.append(historyDiv, gameDiv);

  const records: GameRecord[] = loadHistory();
  if (records.length > 0) displayHistory(records);
});
