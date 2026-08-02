import {renderHistogram, scoreDistribution} from './histogram.js';

export interface GameRecord {
  /** ISO 8601 timestamp of when the game was completed. */
  date: string;
  /** Confidence values given by the user, one per question (0.5–1.0). */
  confidences: number[];
  /** Number of questions answered correctly. */
  correctCount: number;
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

export function saveGame(
    confidences: number[], correctCount: number): GameRecord[] {
  const record: GameRecord = {
    date: new Date().toISOString(),
    confidences: [...confidences],
    correctCount,
  };
  const history = loadHistory();
  history.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  return history;
}

export function displayRecord(
    output: HTMLDivElement, record: GameRecord): void {
  const header = Object.assign(
      document.createElement('div'), {className: 'game-record-header'});
  header.appendChild(Object.assign(document.createElement('h2'), {
    className: 'game-record-date',
    textContent: new Date(record.date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }));

  const total = record.confidences.length;
  const expected = record.confidences.reduce((sum, c) => sum + c, 0);

  header.appendChild(Object.assign(document.createElement('p'), {
    className: 'game-record-score',
    textContent: `You got ${record.correctCount} of ${total} right ` +
        `(expected from your confidence: ${expected.toFixed(1)}).`
  }));

  const histogram =
      Object.assign(document.createElement('div'), {className: 'histogram'});
  renderHistogram(histogram, scoreDistribution(record.confidences));
  output.append(header, histogram);
}

export function mergeRecords(records: GameRecord[]): GameRecord {
  if (records.length === 0) {
    throw new Error('Expected records to merge.');
  }

  return records.reduce(
      (acc, curr) => ({
        // Lexicographical comparison works perfectly for ISO 8601 strings
        date: curr.date > acc.date ? curr.date : acc.date,
        // Concatenate the confidence arrays
        confidences: acc.confidences.concat(curr.confidences),
        // Sum the correct counts
        correctCount: acc.correctCount + curr.correctCount,
      }),
      {
        date: '',  // An empty string will always be less than a valid ISO 8601
                   // string
        confidences: [] as number[],
        correctCount: 0,
      });
}
