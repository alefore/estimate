import {Signal} from './listener.js';

export type Difficulty = 'easy'|'medium'|'hard';

const DIFFICULTIES: ReadonlyArray<Difficulty> = ['easy', 'medium', 'hard'];

const LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

export function createDifficultySelector(
    initial: Difficulty,
    outputSignal: Signal<Difficulty>): HTMLFieldSetElement {
  const fieldset = Object.assign(
      document.createElement('fieldset'), {className: 'content-block'});

  const legend = fieldset.appendChild(Object.assign(
      document.createElement('legend'), {textContent: 'Difficulty'}));

  DIFFICULTIES.forEach((difficulty) => {
    const label = fieldset.appendChild(document.createElement('label'));

    const input =
        label.appendChild(Object.assign(document.createElement('input'), {
          type: 'radio',
          name: 'difficulty',
          value: difficulty,
          checked: difficulty === initial,
          onchange: () => {
            if (input.checked) outputSignal.value = difficulty;
          },
        }));

    label.appendChild(Object.assign(
        document.createElement('span'), {textContent: LABELS[difficulty]}));
  });

  return fieldset;
}
