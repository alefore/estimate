import {emojiButton} from './button.js';
import {renderHistogram, scoreDistribution} from './histogram.js';

export interface GameRecord {
  /** ISO 8601 timestamp of when the game was completed. */
  date: string;
  /** Confidence values given by the user, one per question (0.5–1.0). */
  confidences: number[];
  /** Number of questions answered correctly. */
  correctCount: number;
  /** Number of questions skipped. */
  skips: number;
  /**
   * Optional title to show (instead of the date). Used for syntesized entries
   * (that can't be erased).
   */
  title?: string;
}

const STORAGE_KEY = 'estimate.gameHistory.v1';

function isValidRecord(r: unknown): r is GameRecord {
  if (typeof r !== 'object' || r === null) return false;
  const rec = r as Partial<GameRecord>;
  return (
      typeof rec.date === 'string' && Array.isArray(rec.confidences) &&
      rec.confidences.every((c) => typeof c === 'number' && c >= 0 && c <= 1) &&
      typeof rec.correctCount === 'number');
}

export function loadHistory(): GameRecord[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return [];
  const parsed: unknown = JSON.parse(raw);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(isValidRecord);
}

export function saveGame(game: GameRecord): GameRecord[] {
  const history = loadHistory();
  history.push(game);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  return history;
}

export function displayHistory(records: GameRecord[]): void {
  const historyDiv = document.getElementById('history')!;
  if (!(historyDiv instanceof HTMLDivElement)) {
    throw new Error('Expected div');
  }
  historyDiv.replaceChildren(...records.map(displayRecord));
  if (records.length > 1) {
    historyDiv.append(displayRecord(
        mergeRecords(records, `Total (${records.length} games)`)));
  }
  document.body.append(historyDiv);
}

export function displayRecord(record: GameRecord): HTMLDetailsElement {
  const total = record.confidences.length;
  const expected = record.confidences.reduce((sum, c) => sum + c, 0);

  const summary = document.createElement('summary');
  const details = document.createElement('div');

  summary.textContent =
      (record.title || new Date(record.date).toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })) +
      ` - ${record.correctCount} correct, ${expected.toFixed(1)} expected`;

  if (!record.title) {
    details.append(emojiButton('❌', 'Erase', () => eraseRecord(record.date)));
  }

  details.append(Object.assign(document.createElement('p'), {
    className: 'game-record-score',
    textContent: `You got ${record.correctCount} of ${total} right` +
        (record.skips > 0 ? ` (skipped: ${record.skips})` : '') +
        `. Your confidence predicted: ${expected.toFixed(1)}).`
  }));

  const histogram =
      Object.assign(document.createElement('div'), {className: 'histogram'});
  renderHistogram(histogram, scoreDistribution(record.confidences));
  details.append(histogram);

  const container = Object.assign(
      document.createElement('details'), {classList: 'history-record'});
  container.append(summary, details);
  return container;
}

function eraseRecord(date: string) {
  const history = loadHistory().filter(r => r.date !== date);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  displayHistory(history);
}

function mergeRecords(records: GameRecord[], title: string): GameRecord {
  if (records.length === 0) {
    throw new Error('Expected records to merge.');
  }

  return records.reduce(
      (acc, curr) => ({
        // Lexicographical comparison works perfectly for ISO 8601 strings
        date: curr.date > acc.date ? curr.date : acc.date,
        confidences: acc.confidences.concat(curr.confidences),
        correctCount: acc.correctCount + curr.correctCount,
        skips: acc.skips + curr.skips,
        title: title,
      }),
      {
        date: '',  // An empty string will always be less than a valid ISO 8601
                   // string
        confidences: [] as number[],
        correctCount: 0,
        skips: 0
      });
}
