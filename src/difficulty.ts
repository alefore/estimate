import {Signal} from './listener.js';

export type Difficulty = 'easy'|'medium'|'hard';

const DIFFICULTIES: ReadonlyArray<Difficulty> = ['easy', 'medium', 'hard'];

const LABELS: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

// If the base event happened X years ago, look for an event with a distance
// around difficultyDistanceRatios[...] * X from it. This isn't exact (we apply
// weights to different years based on how far they are from this target).
// See App.generateQuestion for details.
export const difficultyDistanceRatios: Record<Difficulty, number> = {
  easy: 0.8,
  medium: 0.4,
  hard: 0.2
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

export const DIFFICULTY_FILTERS:
    Record<Difficulty, (d: Difficulty) => boolean> = {
      easy: (d) => d === 'easy',
      medium: (d) => d === 'easy' || d === 'medium',
      hard: (d) => true,
    };
