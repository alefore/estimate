import {EmojiButton} from './button.js';
import {difficultyDistanceRatios} from './difficulty.js';
import {HistoryManager} from './history.js';
import {Computed, Signal} from './listener.js';
import {CompareQuestion, QuestionView, UnitEntry} from './question.js';
import {Settings} from './settings.js';
import {SettingsManager} from './settings_manager.js';
import {GameRecord} from './storage.js';

export class Game {
  private readonly allQuestions: QuestionView[];
  public readonly scoreSignal: Signal<GameRecord|null> = new Signal(null);

  constructor(
      settingsManager: SettingsManager,
      private historyManager: HistoryManager,
      gameDiv: HTMLDivElement,
  ) {
    gameDiv.replaceChildren();
    const questionInputs = Array.from(
        {length: settingsManager.settings.value.questionsPerGame},
        () => this.generateQuestion(settingsManager));
    this.allQuestions = questionInputs.map((q, index) => {
      return new QuestionView(
          q, index, gameDiv,
          new Computed(() => this.scoreSignal.value !== null));
    });

    const finishButton =
        new EmojiButton('✔️ ', 'Finish', 'End the game and show the results.');
    finishButton.clickEvent.subscribe(() => {
      this.setScore();
      finishButton.button.remove();
    });
    gameDiv.append(finishButton.button);

    new Computed(() => {
      const pendingQuestions =
          this.allQuestions
              .filter(
                  (q) => q.question.selectionIndex.value === null ||
                      q.confidenceButtons.confidence.value === null)
              .length;
      finishButton.updateText(
          pendingQuestions === 0 ? 'Finish' :
                                   `Questions pending: ${pendingQuestions}`);
      finishButton.setDisabled(pendingQuestions > 0);
    }).alwaysFresh();
  }

  setScore(): void {
    const questions = this.allQuestions.filter(
        (q) => q.confidenceButtons.confidence.value! > 50);

    const score: GameRecord = {
      date: new Date().toISOString(),
      answers: questions.map((q) => {
        const index = q.question.selectionIndex.value;
        if (index === null) throw new Error('Question is not answered.');
        return {
          questionId0: q.question.idQuestion0(),
          questionId1: q.question.idQuestion1(),
          indexFirst: index,
          confidence: q.confidenceButtons.confidence.value! / 100,
          correct: q.question.isCorrect()
        };
      }),
    };

    this.historyManager.saveGame(score);
    this.scoreSignal.value = score;
  }

  generateQuestion(settingsManager: SettingsManager): CompareQuestion {
    const settings: Settings = settingsManager.settings.value;
    const distanceRatio = difficultyDistanceRatios[settings.difficulty];
    const entries = settingsManager.enabledEntries.value;
    if (entries.length < 2) throw new Error('Not enough entries to compare.');

    const base = entries[Math.floor(Math.random() * entries.length)];

    const minYear = entries[0].value;
    const maxYear = entries[entries.length - 1].value;
    if (minYear === maxYear)
      throw new Error(
          'All entries occur in the exact same year. Cannot generate a comparison.');

    const currentYear = new Date().getFullYear();
    // 20% of elapsed time or at least 5 years.
    const targetDistance =
        Math.max(5, (currentYear - base.value) * distanceRatio);
    const targetA = base.value - targetDistance;
    const targetB = base.value + targetDistance;
    const sigma = targetDistance * 0.5;

    const entriesByYear: Map<number, UnitEntry[]> =
        entries.filter(entry => entry.value !== base.value)
            .filter(entry => base.topic.every(t => !entry.topic.includes(t)))
            .reduce((acc, entry) => {
              if (!acc.has(entry.value)) acc.set(entry.value, []);
              acc.get(entry.value)!.push(entry);
              return acc;
            }, new Map<number, UnitEntry[]>());

    if (entriesByYear.size === 0)
      throw new Error('Could not find a second entry with a different value.');

    const yearWeights = Array.from(entriesByYear.keys()).map(year => {
      const minDistance =
          Math.min(Math.abs(year - targetA), Math.abs(year - targetB));
      return {year, weight: Math.exp(-0.5 * Math.pow(minDistance / sigma, 2))};
    });

    const totalWeight = yearWeights.reduce((sum, yw) => sum + yw.weight, 0);

    let randomVal = Math.random() * totalWeight;
    const selectedYear = yearWeights
                             .find(yw => {
                               randomVal -= yw.weight;
                               return randomVal <= 0;
                             })
                             ?.year ??
        yearWeights[0].year;

    const yearEntries = entriesByYear.get(selectedYear)!;
    const targetEntry =
        yearEntries[Math.floor(Math.random() * yearEntries.length)];
    return new CompareQuestion(
        [base, targetEntry],
        new Computed(() => this.scoreSignal.value !== null));
  }
}
