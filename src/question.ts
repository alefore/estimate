export interface UnitEntry {
  name: string;
  value: number;
  // `id` is used to never pair two questions with the same id. This lets us
  // avoid questions like "Napoleon was born before Napoleon was exiled".
  id?: string;
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
    this.view.append(document.createTextNode('before'));
    this.addInputToView(units[1], reveal);
    if (reveal) {
      this.view.removeEventListener('click', this.handleDivClick);
      this.view.classList.remove('clickable');
    }
  }

  private addInputToView(unit: UnitEntry, reveal: boolean) {
    const p = document.createElement('p');
    p.textContent = unit.name;
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
}

export class QuestionView {
  readonly div: HTMLDivElement = document.createElement('div');
  readonly sliderContainer: HTMLDivElement = Object.assign(
      document.createElement('div'), {className: 'slider-container'});
  readonly slider: HTMLInputElement = Object.assign(
      document.createElement('input'),
      {type: 'range', min: '50', max: '100', step: '5', value: '50'});
  readonly header: HTMLHeadingElement = document.createElement('div');

  constructor(
      public readonly question: CompareQuestion, outputDiv: HTMLDivElement) {
    this.div.classList.add('question');

    this.header.append(this.question.view);
    this.question.render(false);

    const estimate =
        Object.assign(document.createElement('span'), {textContent: '50%'});
    this.slider.addEventListener('input', () => {
      estimate.textContent = `${this.slider.value}%`;
    });

    this.sliderContainer.append(this.slider, estimate);

    this.div.append(this.header, this.sliderContainer);
    outputDiv.append(this.div);
  }

  reveal() {
    if (this.slider.value != '50') {
      this.header.classList.add(
          this.question.isCorrect() ? 'correct' : 'incorrect');
    }
    this.slider.classList.add('invisible');
    this.sliderContainer.append(this.question.isCorrect() ? '🟢' : '🔴');
    this.question.render(true);
  }
}
