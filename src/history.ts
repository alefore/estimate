import {EmojiButton} from './button.js';
import {compressHistogram, filterHistogram, renderHistogram, scoreDistribution} from './histogram.js';
import {Computed, Signal} from './listener.js';
import {generateCalibrationSVG} from './stats.js';
import {Answer, GameRecord} from './storage.js';
import {createTimestampView} from './timestamps.js';

const STORAGE_KEY = 'estimate.gameHistory.v2';


export interface RawGameRecord {
  date: string;
  answers: number[][];
  title?: string;
}

export class HistoryManager {
  private readonly rawHistory: Signal<RawGameRecord[]> =
      new Signal(this.loadRawHistory());
  public readonly history: Computed<GameRecord[]> =
      new Computed(() => this.parseHistory());

  constructor() {
    let isFirstUpdate = true;
    new Computed(() => {
      const records: RawGameRecord[] = this.rawHistory.value;
      if (isFirstUpdate) {
        console.log('No need to save values when we just loaded them.');
        isFirstUpdate = false;
        return;
      }
      console.log(`Updating storage: ${STORAGE_KEY}`);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    }).alwaysFresh();
  }

  private loadRawHistory(): RawGameRecord[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error(
          'History validation failed: Root structure must be an array.');
    }
    return parsed as RawGameRecord[];
  }

  private parseHistory(): GameRecord[] {
    const output: GameRecord[] = [];
    const input: RawGameRecord[] = this.rawHistory.value;
    for (let i = 0; i < input.length; i++) {
      const record = input[i];
      if (!record || typeof record !== 'object') {
        throw new Error(`History validation failed: Record at index ${
            i} is not an object.`);
      }

      if (typeof record.date !== 'string' || isNaN(Date.parse(record.date))) {
        throw new Error(`History validation failed: Record at index ${
            i} has a missing or invalid ISO 8601 date.`);
      }

      if (record.title !== undefined) {
        throw new Error(`History validation failed: Record at index ${
            i} provides a 'title'.`);
      }

      if (!Array.isArray(record.answers)) {
        throw new Error(`History validation failed: Record at index ${
            i} 'answers' must be an array.`);
      }

      const mappedAnswers: Answer[] = [];

      for (let j = 0; j < record.answers.length; j++) {
        const ans = record.answers[j];
        if (!Array.isArray(ans) || ans.length !== 5) {
          throw new Error(`History validation failed: Record ${i}, Answer ${
              j} must be an array of exactly 5 elements.`);
        }
        if (!ans.every(val => typeof val === 'number')) {
          throw new Error(`History validation failed: Record ${i}, Answer ${
              j} contains non-numeric values.`);
        }

        mappedAnswers.push({
          questionId0: ans[0],
          questionId1: ans[1],
          indexFirst: ans[2],
          confidence: ans[3],
          correct: ans[4] === 1,
        });
      }

      const reconstructedRecord:
          GameRecord = {date: record.date, answers: mappedAnswers};

      output.push(reconstructedRecord);
    }

    return output;
  }

  public saveGame(game: GameRecord): void {
    if (game.title !== undefined)
      throw new Error('Attempted to save a game with a title.');

    console.log('Appending to raw history.');
    this.rawHistory.value = [
      ...this.rawHistory.value, {
        date: game.date,
        answers: game.answers.map(
            ans =>
                [ans.questionId0, ans.questionId1, ans.indexFirst,
                 ans.confidence, ans.correct ? 1 : 0])
      }
    ];
  }

  eraseRecord(date: string) {
    this.rawHistory.value = this.rawHistory.value.filter(r => r.date !== date);
  }

  displayHistory(historyDiv: HTMLDivElement): void {
    const records: GameRecord[] = this.history.value;
    if (records.length <= 0) {
      historyDiv.replaceChildren(Object.assign(
          document.createElement('p'), {textContent: 'History is empty.'}));
      return;
    }

    historyDiv.replaceChildren(...records.map(this.displayRecord).reverse());
    if (records.length > 1) {
      const aggregate = this.displayRecord(
          mergeRecords(records, `Total (${records.length} games)`))
      aggregate.open = true;
      historyDiv.prepend(aggregate);
    }
    document.body.append(historyDiv);
  }

  displayRecord(record: GameRecord): HTMLDetailsElement {
    const confidences = record.answers.map((a) => a.confidence);
    const total = record.answers.length;
    const correct = record.answers.filter((a) => a.correct).length;
    const expected = confidences.reduce((sum, c) => sum + c, 0);

    const summary = document.createElement('summary');
    const details = document.createElement('div');

    if (record.title)
      summary.append(document.createTextNode(record.title));
    else
      summary.append(createTimestampView(new Date(record.date).getTime()));

    summary.append(document.createTextNode(
        `: ${correct} correct, ${expected.toFixed(1)} expected`));

    if (!record.title) {
      details.appendChild(new EmojiButton(
                              '❌', 'Erase',
                              'Remove this record from the history.',
                              () => this.eraseRecord(record.date))
                              .button);
    }

    details.append(Object.assign(document.createElement('p'), {
      className: 'game-record-score',
      textContent: `You got ${correct} of ${
          total} right. Your confidence predicted: ${expected.toFixed(1)}.`
    }));

    const histogramDiv = details.appendChild(
        Object.assign(document.createElement('div'), {className: 'histogram'}));
    renderHistogram(
        histogramDiv,
        compressHistogram(filterHistogram(scoreDistribution(confidences)), 20));

    const calibrationDashboard =
        details.appendChild(Object.assign(document.createElement('div'), {
          className: 'calibration-graph',
          innerHTML: generateCalibrationSVG(record)
        }));

    if (!record.title)
      details.append(Object.assign(document.createElement('p'), {
        textContent: new Date(record.date).toLocaleString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      }));

    const container = Object.assign(
        document.createElement('details'), {classList: 'history-record'});
    container.append(summary, details);
    return container;
  }
}


function mergeRecords(records: GameRecord[], title: string): GameRecord {
  if (records.length === 0) {
    throw new Error('Expected records to merge.');
  }

  return records.reduce(
      (acc, curr) => ({
        // Lexicographical comparison works perfectly for ISO 8601 strings
        date: curr.date > acc.date ? curr.date : acc.date,
        answers: acc.answers.concat(curr.answers),
        title: title,
      }),
      {
        date: '',  // An empty string will always be less than a valid ISO 8601
                   // string
        answers: [] as Answer[],
      });
}
