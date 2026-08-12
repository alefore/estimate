export interface Answer {
  questionId0: number;
  questionId1: number;
  indexFirst: number;
  confidence: number;
  correct: boolean;
}

export interface GameRecord {
  /** ISO 8601 timestamp of when the game was completed. */
  date: string;
  answers: Answer[];
  /**
   * Optional title to show (instead of the date). Used for syntesized entries
   * (that can't be erased).
   */
  title?: string;
}
