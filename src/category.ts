import {Computed, Signal} from './listener.js';
import {UnitEntry} from './question.js';
import {Settings} from './settings.js';

export enum Category {
  Birth = 'Births',
  HistoricalEvent = 'Historical Events',
  Book = 'Books',
  Film = 'Films',
  Invention = 'Inventions',
  Painting = 'Paintings',
  Structure = 'Structures',
  Company = 'Companies',
}

export function emojiForCategory(category: Category): string {
  switch (category) {
    case Category.Birth:
      return '👶';
    case Category.HistoricalEvent:
      return '';
    case Category.Book:
      return '📖';
    case Category.Film:
      return '🎥';
    case Category.Invention:
      return '💡';
    case Category.Painting:
      return '🎨';
    case Category.Structure:
      return '🏛️';
    case Category.Company:
      return '💼';
  }
}


export function createCategoryFilter(
    enabledEntries: Computed<UnitEntry[]>,
    settingsSignal: Signal<Settings>): HTMLFieldSetElement {
  const fieldset = Object.assign(
      document.createElement('fieldset'), {classList: 'content-block'});

  fieldset.append(
      Object.assign(
          document.createElement('legend'), {textContent: 'Categories'}),
      Object.assign(
          document.createElement('p'),
          {textContent: 'Which question categories are enabled?'}));

  const categoryList = fieldset.appendChild(Object.assign(
      document.createElement('div'), {id: 'settings-categories'}));

  const categoriesDisabled = new Set(settingsSignal.value.categoriesDisabled);
  Object.values(Category).forEach((value) => {
    const row = categoryList.appendChild(Object.assign(
        document.createElement('div'), {className: 'category-row'}));
    const id = `setting-category-${value}`;
    const checkbox =
        row.appendChild(Object.assign(document.createElement('input'), {
          type: 'checkbox',
          id: id,
          onchange: () => {
            const settings = settingsSignal.value;
            const newCategoriesDisabled = new Set(settings.categoriesDisabled);
            if (checkbox.checked)
              newCategoriesDisabled.delete(value);
            else
              newCategoriesDisabled.add(value);
            settingsSignal.value = {
              ...settings,
              categoriesDisabled: [...newCategoriesDisabled]
            };
          }
        }));

    new Computed(() => {
      checkbox.checked =
          !settingsSignal.value.categoriesDisabled.includes(value);
    }).alwaysFresh();

    row.append(Object.assign(
        document.createElement('label'),
        {textContent: `${emojiForCategory(value)} ${value}`, htmlFor: id}));
  });

  const summary = fieldset.appendChild(document.createElement('p'));
  new Computed(() => {
    const allDisabled: boolean =
        settingsSignal.value.categoriesDisabled.length ===
        Object.keys(Category).length;
    const count: number = enabledEntries.value.length;
    summary.textContent = allDisabled ?
        'Warning: All categories are disabled. This setting will be ignored.' :
        `Entries enabled: ${count}`;
    if (allDisabled)
      summary.classList.add('warning');
    else
      summary.classList.remove('warning');
  }).alwaysFresh();

  return fieldset;
}
