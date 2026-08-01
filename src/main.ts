import {famousPersons} from './famous_persons.js';
import {historicalEvents} from './historical_events.js';

interface UnitEntry {
  name: string;
  value: number;
}

interface QuestionInput {
  question: Node;
  correctAnswer: boolean;
  explanation: Node;
}

class Unit {
  constructor(
      public readonly name: string,
      public readonly render: (a: UnitEntry, b: UnitEntry) => QuestionInput) {}
}

const data = new Map<Unit, UnitEntry[]>();

const yearUnit = new Unit('Year', (a, b) => {
  const fragment = document.createDocumentFragment();

  const spanA = document.createElement('span');
  spanA.className = 'highlight';
  spanA.textContent = a.name;

  const spanB = document.createElement('span');
  spanB.className = 'highlight';
  spanB.textContent = b.name;

  fragment.append(spanA, ' after ', spanB);

  const explanation = document.createElement('div');
  explanation.textContent = `${a.name}: ${a.value}, ${b.name}: ${b.value}`;

  return {question: fragment, correctAnswer: a.value > b.value, explanation};
});

data.set(yearUnit, famousPersons.concat(historicalEvents).concat([
  {name: 'humans landed on the moon', value: 1969},
  {name: 'The first video was uploaded to YouTube', value: 2005},
  {name: 'the first iPhone was released', value: 2007},
  {
    name:
        'Bitcoin\'s genesis block (first block in Bitcoin blockchain) was mined',
    value: 2009
  },
]));

function generateQuestion(data: Map<Unit, UnitEntry[]>): QuestionInput {
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

  return selectedUnit.render(entries[indexA], entries[indexB]);
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

class Question {
  div: HTMLElement = document.createElement('div');
  slider: HTMLInputElement;
  header: HTMLHeadingElement;

  constructor(public readonly questionInput: QuestionInput) {
    this.div.classList.add('question');

    this.header = document.createElement('div');
    this.header.appendChild(questionInput.question);

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';

    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.min = '0';
    this.slider.max = '100';
    this.slider.step = '5';
    this.slider.value = '50';
    this.slider.addEventListener('input', () => {
      estimate.textContent = `${this.slider.value}%`;
    });

    const estimate = document.createElement('span');
    estimate.textContent = '50%';
    sliderContainer.append(this.slider, estimate);

    this.div.append(this.header, sliderContainer);
    document.body.append(this.div);
  }

  isUserCorrect(): boolean {
    return (Number(this.slider.value) >= 50) ==
        this.questionInput.correctAnswer;
  }

  reveal() {
    if (this.slider.value != '50') {
      this.header.classList.add(this.isUserCorrect() ? 'correct' : 'incorrect');
    }
    this.slider.classList.add('invisible');
    const user = Number(this.slider.value) >= 50;
    const actual = this.questionInput.correctAnswer;
    this.div.append(user === actual ? 'Correct' : 'Incorrect');
    this.div.append(
        ` (You: ${user ? '🟢' : '🔴'}, Actual: ${actual ? '🟢' : '🔴'})`);
    this.div.appendChild(this.questionInput.explanation);
  }
}

function reveal(questions: Question[], button: HTMLButtonElement) {
  questions.forEach((q) => q.reveal());
  let countCorrect = questions.filter((q) => q.isUserCorrect()).length;
  const expectedCorrect = questions.reduce((expectedCorrect, question) => {
    const value = Number(question.slider.value);
    const p = value / 100;
    return expectedCorrect + Math.max(p, 1 - p);
  }, 0);
  const result = document.createElement('p');
  result.textContent =
      `Correctly answered ${countCorrect}, expectation was ${expectedCorrect}`;
  document.body.append(result);
  button.classList.add('invisible');
}

document.addEventListener('DOMContentLoaded', () => {
  const questions: Question[] = questionInputs.map((q) => {
    return new Question(q);
  });

  const button = document.createElement('button');
  button.textContent = 'Reveal!';
  button.addEventListener(
      'click', (event: MouseEvent) => reveal(questions, button));
  document.body.append(button);
});
