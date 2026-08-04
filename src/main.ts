import {Book, books} from './books.js';
import {famousPersons} from './famous_persons.js';
import {historicalEvents} from './historical_events.js';
import {displayRecord, GameRecord, mergeRecords, saveGame} from './history.js';
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
        .concat([
          {name: 'humans landed on the moon', value: 1969},
          {name: 'The first video was uploaded to YouTube', value: 2005},
          {name: 'the first iPhone was released', value: 2007},
          {
            name:
                'Bitcoin\'s genesis block (first block in Bitcoin blockchain) was mined',
            value: 2009
          },
        ]));

function generateQuestion(data: Map<Unit, UnitEntry[]>): CompareQuestion {
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

  const indexA = Math.floor(Math.random() * entries.length);
  let indexB = Math.floor(Math.random() * entries.length);

  while (entries[indexA].value === entries[indexB].value) {
    indexB = Math.floor(Math.random() * entries.length);
  }

  return new CompareQuestion(entries[indexA], entries[indexB]);
}

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
