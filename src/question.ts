import {Category, emojiForCategory} from './category.js';
import {type Difficulty} from './difficulty.js';
import {Computed, Signal} from './listener.js';

export interface UnitEntry {
  name: string;
  value: number;
  category: Category;
  difficulty: Difficulty;
  // `topic` is used to never pair two questions about the same node. This lets
  // us avoid questions like "Napoleon was born" vs "Napoleon was exiled".
  topic: string[];
  // A unique static numeric ID that identifies the entry. We avoid computing
  // this dynamically because we want it to be stable (so that we can store it
  // to identify the entries in a question).
  id: number;
}

class ConfidenceButtons {
  public readonly container = Object.assign(
      document.createElement('fieldset'), {className: 'confidence-group'});

  public confidence: Signal<number|null> = new Signal(null);

  constructor() {
    const questionId = Math.random().toString(36).slice(2);

    this.container.appendChild(Object.assign(
        document.createElement('legend'),
        {textContent: 'How confident are you?', className: 'sr-only'}));

    [51, 60, 70, 80, 90, 100].forEach(value => {
      const label = this.container.appendChild(document.createElement('label'));

      const radio =
          label.appendChild(Object.assign(document.createElement('input'), {
            type: 'radio',
            name: `confidence_${questionId}`,
            value: value,
            onchange: () => {
              if (radio.checked) this.confidence.value = value;
            }
          }));

      new Computed(() => {
        radio.checked = this.confidence.value === value;
      }).alwaysFresh();

      label.appendChild(document.createTextNode(` ${value}%`));
    });
  }

  disable() {
    this.container.replaceChildren(Object.assign(
        document.createElement('p'),
        {textContent: `Confidence: ${this.confidence.value}%.`}));
  }
}

export class CompareQuestion {
  public selectionIndex: Signal<number|null> = new Signal(null);
  public view = Object.assign(
      document.createElement('fieldset'),
      {className: 'compare-question-options'});
  private optionLabels: HTMLLabelElement[];

  constructor(public readonly inputs: UnitEntry[]) {
    if (this.inputs.length !== 2) throw new Error('Invalid inputs length.');

    this.view.appendChild(Object.assign(
        document.createElement('legend'),
        {textContent: 'What was first?', className: 'sr-only'}));

    this.optionLabels =
        inputs.map((element, index) => this.addInputToView(this.view, index));
  }

  reveal() {
    this.view.disabled = true;
    this.optionLabels.map(
        (label, index) =>
            label.append(Object.assign(document.createElement('span'), {
              className: 'answer-value',
              textContent: `(${this.inputs[index]!.value})`
            })));
  }

  private addInputToView(fieldset: HTMLFieldSetElement, unitIndex: number):
      HTMLLabelElement {
    const label = fieldset.appendChild(document.createElement('label'));

    const radio =
        label.appendChild(Object.assign(document.createElement('input'), {
          type: 'radio',
          name: `${this.inputs[0].id}:${this.inputs[1].id}`,
          onchange: (event: Event) => {
            this.selectionIndex.value = unitIndex;
          },
        }));

    const unit = this.inputs[unitIndex]!;
    label.append(
        Object.assign(
            document.createElement('span'),
            {textContent: emojiForCategory(unit.category)}),
        Object.assign(
            document.createElement('span'), {textContent: unit.name}));
    return label;
  }

  public isAnswered(): boolean {
    return this.selectionIndex.value !== null;
  }

  public isCorrect() {
    const index = this.selectionIndex.value;
    if (index === null)
      throw new Error(
          'Attempted to evaluate if unanswered question is correct.');
    return this.inputs[index].value < this.inputs[(index + 1) % 2].value;
  }

  public idQuestion0(): number {
    return this.inputs[0].id;
  }

  public idQuestion1(): number {
    return this.inputs[1].id;
  }
}

export class QuestionView {
  readonly div: HTMLDivElement = document.createElement('div');
  public readonly confidenceButtons = new ConfidenceButtons();

  constructor(
      public readonly question: CompareQuestion, outputDiv: HTMLDivElement) {
    this.div.classList.add('question');
    this.div.append(this.question.view, this.confidenceButtons.container);
    outputDiv.append(this.div);
  }

  reveal() {
    this.div.classList.add(this.question.isCorrect() ? 'correct' : 'incorrect');
    this.confidenceButtons.disable();
    this.question.reveal();
  }
}
