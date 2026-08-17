import {Category, emojiForCategory} from './category.js';
import {type Difficulty} from './difficulty.js';
import {Computed, type ReadableSignal, Signal} from './listener.js';

export interface UnitEntry {
  name: string;
  shortName: string;
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
  // Link to relevant wikipedia page for this entry.
  link: string;
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

    [51, 60, 70, 80, 90, 99].forEach(value => {
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
  // Will contain exactly two elements (one for each entry in `inputs`).
  private readonly links: HTMLAnchorElement[] = [];

  constructor(
      public readonly inputs: UnitEntry[],
      private revealSignal: ReadableSignal<boolean>) {
    if (this.inputs.length !== 2) throw new Error('Invalid inputs length.');

    this.view.appendChild(Object.assign(
        document.createElement('legend'),
        {textContent: 'What was first?', className: 'sr-only'}));

    inputs.forEach((element, index) => this.addInputToView(this.view, index));
    new Computed(() => {
      this.view.disabled = this.revealSignal.value;
    }).alwaysFresh();
  }

  private addInputToView(fieldset: HTMLFieldSetElement, unitIndex: number):
      HTMLLabelElement {
    const input: UnitEntry = this.inputs[unitIndex]!;
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
    label.append(Object.assign(
        document.createElement('span'),
        {textContent: emojiForCategory(unit.category)}));
    const textSpan = label.appendChild(document.createElement('span'));
    const answerSpan = label.appendChild(Object.assign(
        document.createElement('span'), {className: 'answer-value'}));

    new Computed(() => {
      const link =
          Object.assign(document.createElement('a'), {textContent: unit.name});
      textSpan.replaceChildren(link);
      if (this.revealSignal.value) {
        link.href = input.link;
      }
      answerSpan.textContent =
          this.revealSignal.value ? String(input.value) : '';
    }).alwaysFresh();
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
  private readonly details: HTMLDetailsElement =
      document.createElement('details');
  readonly summary: HTMLElement =
      this.details.appendChild(document.createElement('summary'));
  public readonly confidenceButtons = new ConfidenceButtons();
  private autoCollapsed: boolean = false;

  constructor(
      public readonly question: CompareQuestion, private readonly index: number,
      outputDiv: HTMLDivElement, revealSignal: ReadableSignal<boolean>) {
    this.details.classList.add('question');
    this.details.open = true;
    new Computed(() => {
      this.summary.textContent = `${index + 1}: `;
      if (this.question.selectionIndex.value === null) {
        this.summary.textContent += 'What happened first?';
      } else if (this.confidenceButtons.confidence.value === null) {
        this.summary.textContent += 'Confidence?';
      } else {
        const input0 = this.question.inputs[this.question.selectionIndex.value];
        const input1 =
            this.question.inputs[(this.question.selectionIndex.value + 1) % 2];
        const link0 = Object.assign(
            document.createElement('a'), {textContent: input0.shortName});
        const link1 = Object.assign(
            document.createElement('a'), {textContent: input1.shortName});
        this.summary.append(
            document.createTextNode(
                `${this.confidenceButtons.confidence.value}%: `),
            link0, document.createTextNode(' < '), link1);
        if (revealSignal.value) {
          link0.href = input0.link;
          link1.href = input1.link;
        }
        if (!this.autoCollapsed) {
          this.autoCollapsed = true;
          this.details.open = false;
        }
      }
    }).alwaysFresh();
    this.details.append(this.question.view, this.confidenceButtons.container);
    outputDiv.append(this.details);

    new Computed(() => {
      if (!revealSignal.value) return;
      const isCorrect = this.question.isCorrect();
      this.details.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) this.details.open = true;
      this.confidenceButtons.disable();
    }).alwaysFresh();
  }
}
