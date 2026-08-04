import {Book, books} from './books.js';
import {famousPersons} from './famous_persons.js';
import {historicalEvents} from './historical_events.js';
import {displayRecord, GameRecord, mergeRecords, saveGame} from './history.js';
import {Invention, inventions} from './inventions.js';
import {CompareQuestion, QuestionView, UnitEntry} from './question.js';

class Unit {
  constructor(public readonly name: string) {}
}

const data = new Map<Unit, UnitEntry[]>();

const yearUnit = new Unit('Year');

data.set(
    yearUnit,
    famousPersons.concat(historicalEvents)
        .concat(books.map((b: Book) => ({
                            name: `${b.title} (by ${b.author}) was published`,
                            value: b.year
                          })))
        .concat(inventions.map((i: Invention) => ({
                                 name: `${i.name} was invented` +
                                     (i.inventor ? ` (by ${i.inventor})` : ''),
                                 value: i.year
                               })))
        .concat([
          {name: 'humans landed on the moon', value: 1969},
          {name: 'The first video was uploaded to YouTube', value: 2005},
          {name: 'the first iPhone was released', value: 2007},
          {
            name:
                'Bitcoin\'s genesis block (first block in Bitcoin blockchain) was mined',
            value: 2009
          },
        ])
        .sort((a, b) => a.value - b.value));

function generateQuestion(
    data: Map<Unit, UnitEntry[]>,
    targetDistance: number = 50): CompareQuestion {
  const units = Array.from(data.keys());
  if (units.length === 0) {
    throw new Error('The data map is empty.');
  }

  const randomUnitIndex = Math.floor(Math.random() * units.length);
  const selectedUnit = units[randomUnitIndex];

  const entries = data.get(selectedUnit);
  if (!entries || entries.length < 2) {
    throw new Error(`Unit '${
        selectedUnit
            .name}' must have at least two entries to generate a question.`);
  }

  // First item picked uniformly at random:
  const base = entries[Math.floor(Math.random() * entries.length)];

  // 2. Calculate scale-invariant weights for all other valid entries
  const weights = entries.map((entry) => {
    if (entry.value === base.value) {
      return 0;
    }

    const distance = Math.abs(entry.value - base.value);
    return Math.exp(-Math.pow(distance / targetDistance, 2));
  });

  console.log(weights);
  const totalWeight =
      weights.reduce((accumulator, current) => accumulator + current, 0);
  if (totalWeight === 0) {
    throw new Error('Could not find a second entry with a different value.');
  }

  let randomWeight = Math.random() * totalWeight;
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > 0) {
      randomWeight -= weights[i];
      if (randomWeight <= 0) {
        return new CompareQuestion(base, entries[i]);
      }
    }
  }

  throw new Error('Failure generating question.');
}

console.log(data);
const questionInputs = Array.from({length: 10}, () => generateQuestion(data));

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
//     question: 'Johann Sebastian Bach was born before Isaac Newton',
//     correctAnswer: false
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

function reveal(questions: QuestionView[], button: HTMLButtonElement) {
  questions.forEach((q) => q.reveal());
  button.classList.add('invisible');

  const records: GameRecord[] = saveGame(
      questions.map((q) => Number(q.slider.value) / 100),
      questions.filter((q) => q.question.isCorrect()).length);

  const historyDiv = document.createElement('div');
  records.forEach((r) => displayRecord(historyDiv, r));
  document.body.append(historyDiv);

  if (records.length > 1) {
    displayRecord(historyDiv, mergeRecords(records));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const questions: QuestionView[] = questionInputs.map((q) => {
    return new QuestionView(q);
  });

  const button = document.createElement('button');
  button.textContent = 'Reveal!';
  button.addEventListener(
      'click', (event: MouseEvent) => reveal(questions, button));
  document.body.append(button);
});
