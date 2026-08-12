import {Category, emojiForCategory} from './category.js';
import {type Difficulty} from './difficulty.js';

export interface UnitEntry {
  name: string;
  value: number;
  category: Category;
  difficulty?: Difficulty;
  // `topic` is used to never pair two questions about the same node. This lets
  // us avoid questions like "Napoleon was born" vs "Napoleon was exiled".
  topic: string[];
  // A unique static numeric ID that identifies the entry. We avoid computing
  // this dynamically because we want it to be stable (so that we can store it
  // to identify the entries in a question).
  id?: number;
}

class ConfidenceButtons {
  public readonly container: HTMLDivElement =
      Object.assign(document.createElement('div'), {className: 'confidence'});
  public readonly buttons = new Map<number, HTMLButtonElement>();

  constructor(onChange: (value: number) => void, initialValue: number = 50) {
    const select = (value: number): void => {
      for (const [v, btn] of this.buttons) {
        btn.classList.toggle('selected', v === value);
      }
      onChange(value);
    };

    for (let value = 50; value <= 100; value += 5) {
      const btn = document.createElement('button');
      btn.textContent = `${value}%`;
      btn.addEventListener('click', () => select(value));
      this.buttons.set(value, btn);
      this.container.appendChild(btn);
    }

    select(initialValue);
  }

  disable(value: number) {
    this.container.replaceChildren(Object.assign(document.createElement('p'), {
      textContent: value === 50 ? 'Skipped (50% confidence).' :
                                  `Confidence: ${value}%.`
    }));
  }
}

export class CompareQuestion {
  public flipped = false;
  public readonly view = Object.assign(
      document.createElement('div'), {className: 'compare-question clickable'});

  constructor(
      public readonly input0: UnitEntry, public readonly input1: UnitEntry) {
    this.view.addEventListener('click', this.handleDivClick);
  }

  handleDivClick =
      () => {
        this.flipped = !this.flipped;
        this.render(false);
      }

  sortedUnits() {
    const output = [this.input0, this.input1];
    if (this.flipped) output.reverse();
    return output;
  }

  render(reveal: boolean) {
    this.view.textContent = '';
    const units = this.sortedUnits();
    this.addInputToView(units[0], reveal);
    this.view.append(document.createElement('hr'));
    this.addInputToView(units[1], reveal);
    if (reveal) {
      this.view.removeEventListener('click', this.handleDivClick);
      this.view.classList.remove('clickable');
    }
  }

  private addInputToView(unit: UnitEntry, reveal: boolean) {
    const p = document.createElement('p');
    p.textContent = emojiForCategory(unit.category) + ' ' + unit.name;
    if (reveal) {
      p.append(document.createTextNode(' ('));
      p.append(Object.assign(
          document.createElement('span'),
          {className: 'answer-value', textContent: unit.value}));
      p.append(document.createTextNode(')'));
    }
    this.view.append(p);
  }

  public isCorrect() {
    const units = this.sortedUnits();
    return units[0].value < units[1].value;
  }

  public idQuestion0(): number {
    // TODO: Mandate that all units have IDs and simplify this expression.
    return this.input0.id || -1;
  }

  public idQuestion1(): number {
    // TODO: Mandate that all units have IDs and simplify this expression.
    return this.input1.id || -1;
  }

  public indexFirst(): number {
    return this.flipped ? 1 : 0;
  }
}

export class QuestionView {
  readonly div: HTMLDivElement = document.createElement('div');
  readonly header: HTMLHeadingElement = document.createElement('div');
  confidence: number = 50;
  readonly confidenceButtons = new ConfidenceButtons((value) => {
    this.confidence = value;
  });

  constructor(
      public readonly question: CompareQuestion, outputDiv: HTMLDivElement) {
    this.div.classList.add('question');

    this.header.append(this.question.view);
    this.question.render(false);
    this.div.append(this.header, this.confidenceButtons.container);
    outputDiv.append(this.div);
  }

  reveal() {
    if (this.confidence !== 50) {
      this.header.classList.add(
          this.question.isCorrect() ? 'correct' : 'incorrect');
      this.div.classList.add(
          this.question.isCorrect() ? 'correct' : 'incorrect');
    }
    // this.confidenceContainer.classList.add('invisible');
    // this.sliderContainer.append(this.question.isCorrect() ? '🟢' : '🔴');
    this.confidenceButtons.disable(this.confidence);
    this.question.render(true);
  }
}
