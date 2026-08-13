import {Category, createCategoryFilter, emojiForCategory} from './category.js';
import {createDifficultySelector, type Difficulty, DIFFICULTY_FILTERS, difficultyDistanceRatios} from './difficulty.js';
import {Computed, Signal} from './listener.js';
import {UnitEntry} from './question.js';

export class SettingsManager {
  readonly container =
      Object.assign(document.createElement('div'), {id: 'settings'});
  public readonly difficulty: Signal<Difficulty> = new Signal('medium');
  readonly enabledCategoriesMap: ReadonlyMap<Category, Signal<boolean>> =
      new Map(Object.values(Category).map(
          (value) => [value, new Signal<boolean>(true)]));
  readonly enabledEntries: Computed<UnitEntry[]> = new Computed(() => {
    const difficultyFilter = DIFFICULTY_FILTERS[this.difficulty.value];
    const output =
        this.allEntries
            .filter((u) => this.enabledCategoriesMap.get(u.category)!.value)
            .filter((u) => !u.difficulty || difficultyFilter(u.difficulty));
    return output.length === 0 ? this.allEntries : output;
  });
  readonly questionsPerGame: Signal<number> = new Signal(20);

  constructor(private readonly allEntries: UnitEntry[]) {
    this.container.append(
        Object.assign(document.createElement('h2'), {textContent: 'Settings'}),
        createDifficultySelector('medium', this.difficulty),
        createCategoryFilter(this.enabledCategoriesMap, this.enabledEntries),
        this.createQuestionsPerGame());
  }

  private createQuestionsPerGame(): HTMLFieldSetElement {
    const output = Object.assign(
        document.createElement('fieldset'), {classList: 'content-block'});

    output.append(
        Object.assign(
            document.createElement('legend'), {textContent: 'Game Length'}),
        Object.assign(
            document.createElement('p'),
            {textContent: 'How many questions per game?'}));

    const optionsList = output.appendChild(Object.assign(
        document.createElement('div'), {id: 'settings-game-length'}));

    [5, 10, 20, 50, 100].forEach((value) => {
      const row = optionsList.appendChild(Object.assign(
          document.createElement('div'),
          {className: 'settings-game-length-row'}));

      const id = `setting-questions-${value}`;

      const radio =
          row.appendChild(Object.assign(document.createElement('input'), {
            type: 'radio',
            name: 'questionsPerGame',
            id: id,
            value: value,
            checked: value === this.questionsPerGame.value,
            onchange: () => {
              if (radio.checked) {
                this.questionsPerGame.value = value;
              }
            }
          }));

      row.append(Object.assign(
          document.createElement('label'),
          {textContent: value.toString(), htmlFor: id}));
    });
    return output;
  }
}
