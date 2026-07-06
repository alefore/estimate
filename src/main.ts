interface QuestionInput {
  question: string
  correctAnswer: boolean;
}

const questionInputs: QuestionInput[] = [
  {question: 'The first iPhone was released in 2007', correctAnswer: true},
  {question: 'Alejo was born in Argentina', correctAnswer: false},
  {
    question:
        'Bitcoin\'s genesis block (first block in Bitcoin blockchain) was mined in 2008',
    correctAnswer: false
  },
  {
    question:
        'Brazil is more than 100 times bigger (land area) than Switzerland',
    correctAnswer: true
  },
  {
    question:
        '20 <= number of Swiss cantons <= 30 (counting half-cantons as 0.5)',
    correctAnswer: true
  },
  {
    question: 'Switzerland has borders with exactly 5 countries',
    correctAnswer: true
  },
  {
    question: 'Less than 15% of the Alps (land area) is in Switzerland',
    correctAnswer: true
  },
  {
    question: 'Johann Sebastian Bach was born before Isaac Newton',
    correctAnswer: false
  },
  {
    question: 'The world\'s first website had a ".ch" domain name.',
    correctAnswer: true
  },
  {question: '1900 <= Nintendo was founded < 2000', correctAnswer: false},
  {
    question: 'The first YouTube video was uploaded in 2025',
    correctAnswer: true
  },
  {
    question: 'The term "robot" was coined by a Polish writer',
    correctAnswer: false
  },
  {
    question: 'Smartphones with built-in GPS were released in 1996',
    correctAnswer: false
  },
];

class Question {
  slider: HTMLInputElement;
  header: HTMLHeadingElement;

  constructor(public readonly questionInput: QuestionInput) {
    const div = document.createElement('div');
    this.header = document.createElement('h2');
    this.header.className = 'question';
    this.header.textContent = questionInput.question;

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

    div.append(this.header, sliderContainer);
    document.body.append(div);
  }

  isUserCorrect(): boolean {
    return (Number(this.slider.value) >= 50) ==
        this.questionInput.correctAnswer;
  }

  reveal() {
    this.header.prepend(this.questionInput.correctAnswer ? '🟢 ' : '🔴 ');
    if (this.slider.value != '50') {
      this.header.classList.add(this.isUserCorrect() ? 'correct' : 'incorrect');
    }
    this.slider.classList.add('invisible');
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
