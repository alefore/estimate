import {Answer, GameRecord} from './storage.js'

/**
 * Generates an SVG string containing a Calibration Curve and Histogram.
 */
export function generateCalibrationSVG(record: GameRecord): string {
  const buckets =
      Array.from(new Set(record.answers.map(answer => answer.confidence)))
          .sort((a, b) => a - b);
  const stats = buckets.reduce((acc, conf) => {
    acc[conf] = {total: 0, correct: 0};
    return acc;
  }, {} as Record<number, {
       total: number;
       correct: number
     }>);

  record.answers.forEach(answer => {
    stats[answer.confidence].total += 1;
    if (answer.correct) {
      stats[answer.confidence].correct += 1;
    }
  });

  const width = 700;
  const height = 450;
  const padding = {top: 60, right: 60, bottom: 50, left: 60};
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  const maxTotal = Math.max(...buckets.map(b => stats[b].total), 1);

  // Coordinate mapping helpers
  const getX = (index: number) =>
      padding.left + (index + 0.5) * (graphWidth / buckets.length);
  const getYPercent = (percent: number) =>
      padding.top + graphHeight - (percent / 100) * graphHeight;
  const getYVolume = (volume: number) =>
      padding.top + graphHeight - (volume / maxTotal) * graphHeight;

  let svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${
      height}" width="100%" height="auto"
      style="font-family: sans-serif; background: white; border-radius: 8px;">

      <!-- Chart Title and Legend -->
      <text x="${
      width /
      2}" y="30" text-anchor="middle" font-size="18" font-weight="bold" fill="#1f2937">Confidence Calibration</text>

      <rect x="${
      padding.left}" y="40" width="12" height="12" fill="#e2e8f0" rx="2" />
      <text x="${
      padding.left +
      20}" y="50" font-size="12" fill="#64748b">Answers count (right)</text>

      <line x1="${width / 2 - 60}" y1="46" x2="${
      width / 2 - 30}" y2="46" stroke="#3b82f6" stroke-width="3" />
      <circle cx="${width / 2 - 45}" cy="46" r="4" fill="#3b82f6" />
      <text x="${
      width / 2 -
      20}" y="50" font-size="12" fill="#64748b">Correct % (left)</text>

      <line x1="${width - padding.right - 130}" y1="46" x2="${
      width - padding.right -
      100}" y2="46" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />
      <text x="${
      width - padding.right -
      90}" y="50" font-size="12" fill="#64748b">Perfect Calibration</text>

      <!-- Axes Lines -->
      <line x1="${padding.left}" y1="${padding.top + graphHeight}" x2="${
      width - padding.right}" y2="${
      padding.top + graphHeight}" stroke="#cbd5e1" stroke-width="1" />
      <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${
      padding.top + graphHeight}" stroke="#cbd5e1" stroke-width="1" />
      <line x1="${width - padding.right}" y1="${padding.top}" x2="${
      width - padding.right}" y2="${
      padding.top + graphHeight}" stroke="#cbd5e1" stroke-width="1" />

      <!-- Left Y-Axis Labels (0-100%) -->
      ${
          [0, 25, 50, 75, 100]
              .map(
                  val => `
        <text x="${padding.left - 10}" y="${
                      getYPercent(val) +
                      4}" text-anchor="end" font-size="12" fill="#64748b">${
                      val}%</text>
        <line x1="${padding.left}" y1="${getYPercent(val)}" x2="${
                      width - padding.right}" y2="${
                      getYPercent(val)}" stroke="#f1f5f9" stroke-width="1" />
      `).join('')}

      <!-- Right Y-Axis Labels (Volume) -->
      ${
          [0, maxTotal]
              .map(
                  val => `
        <text x="${width - padding.right + 10}" y="${
                      getYVolume(val) +
                      4}" text-anchor="start" font-size="12" fill="#64748b">${
                      Math.round(val)}</text>
      `).join('')}
  `;

  buckets.forEach((conf, i) => {
    const total = stats[conf].total;
    const barHeight = (total / maxTotal) * graphHeight;
    const x = getX(i) - 20;  // 40px wide bars centered
    const y = getYVolume(total);
    svg += `<rect x="${x}" y="${y}" width="40" height="${
        barHeight}" fill="#e2e8f0" rx="4" />`;
  });

  const baselinePath = buckets
                           .map(
                               (conf, i) => `${i === 0 ? 'M' : 'L'} ${
                                   getX(i)} ${getYPercent(conf * 100)}`)
                           .join(' ');
  svg += `<path d="${
      baselinePath}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6,4" fill="none" />`;

  // Draw Actual Accuracy Line and Points
  let actualPath = '';
  let dataPoints = '';

  buckets.forEach((conf, i) => {
    const {total, correct} = stats[conf];
    const accuracy = total > 0 ? (correct / total) * 100 : 0;

    const x = getX(i);
    const y = getYPercent(accuracy);

    actualPath += `${i === 0 ? 'M' : 'L'} ${x} ${y} `;

    // Only draw the dot and percentage if there is data for this bucket
    if (total > 0) {
      dataPoints += `<circle cx="${x}" cy="${
          y}" r="5" fill="#3b82f6" style="cursor: pointer;">
          <title>${Math.round(accuracy)}%</title>
        </circle>`;
    }
  });

  svg += `<path d="${
      actualPath}" stroke="#3b82f6" stroke-width="3" fill="none" />`;
  svg += dataPoints;

  // X-Axis Labels
  buckets.forEach((conf, i) => {
    svg += `<text x="${getX(i)}" y="${
        padding.top + graphHeight +
        25}" text-anchor="middle" font-size="14" fill="#334155">${
        conf * 100}%</text>`;
  });

  // X-Axis Title
  svg += `<text x="${width / 2}" y="${
      height -
      10}" text-anchor="middle" font-size="14" fill="#475569">Confidence</text>`;

  svg += `</svg>`;

  return svg;
}
