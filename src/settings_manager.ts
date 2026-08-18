import {EmojiButton} from './button.js';
import {Category, createCategoryFilter, emojiForCategory} from './category.js';
import {createDifficultySelector, type Difficulty, DIFFICULTY_FILTERS, difficultyDistanceRatios} from './difficulty.js';
import {Computed, Signal, VoidEvent} from './listener.js';
import {UnitEntry} from './question.js';
import {Settings} from './settings.js';

const STORAGE_KEY = 'estimate.gameSettings.v1';

export class SettingsManager {
  readonly container =
      Object.assign(document.createElement('div'), {id: 'settings'});

  public readonly settings: Signal<Settings> = new Signal(this.loadSettings());

  readonly enabledEntries: Computed<UnitEntry[]> = new Computed(() => {
    const settings = this.settings.value;
    const difficultyFilter = DIFFICULTY_FILTERS[settings.difficulty];
    const categoriesDisabled = new Set(settings.categoriesDisabled);
    const output =
        this.allEntries.filter((u) => !categoriesDisabled.has(u.category))
            .filter((u) => !u.difficulty || difficultyFilter(u.difficulty));
    return output.length === 0 ? this.allEntries : output;
  });
  public readonly doneEvent = new VoidEvent();

  constructor(private readonly allEntries: UnitEntry[]) {
    const doneButton =
        new EmojiButton('✔️ ', 'Done', 'Go back to the main menu.');
    doneButton.clickEvent.subscribe(() => {
      this.doneEvent.notify();
    });
    this.container.append(
        Object.assign(document.createElement('h2'), {textContent: 'Settings'}),
        createDifficultySelector(this.settings),
        createCategoryFilter(this.enabledEntries, this.settings),
        this.createQuestionsPerGame(), doneButton.button);

    let isFirstUpdate = true;
    new Computed(() => {
      const settings = this.settings.value;
      if (isFirstUpdate) {
        console.log('No need to save values when we just loaded them.');
        isFirstUpdate = false;
        return;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    }).alwaysFresh();
  }

  private loadSettings(): Settings {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null)
      return {
        questionsPerGame: 10,
        difficulty: 'medium',
        categoriesDisabled: []
      };
    const parsed: unknown = JSON.parse(raw);
    return parsed as Settings;
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

    const settings = this.settings.value;
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
            checked: value === settings.questionsPerGame,
            onchange: () => {
              if (radio.checked) {
                this.settings.value = {
                  ...this.settings.value,
                  questionsPerGame: value
                };
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
