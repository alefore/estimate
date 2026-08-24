import {Category} from './category.js';
import {type Difficulty} from './difficulty.js';


const STORAGE_KEY = 'estimate.gameSettings.v1';


export interface Settings {
  questionsPerGame: number;
  difficulty: Difficulty;
  // We maintain a list of categories *disabled*. This is somewhat not very
  // ergonomic, but has the advantage that if a new category is added, it'll be
  // enabled by default.
  categoriesDisabled: Category[];
}

export const defaultSettings: Settings = {
  questionsPerGame: 10,
  difficulty: 'medium',
  categoriesDisabled: []
};


export function isSettingsEqual(a: Settings, b: Settings): boolean {
  if (a.questionsPerGame !== b.questionsPerGame) return false;
  if (a.difficulty !== b.difficulty) return false;

  const setA = new Set(a.categoriesDisabled);
  const setB = new Set(b.categoriesDisabled);

  return setA.size === setB.size && setA.isSubsetOf(setB);
}
