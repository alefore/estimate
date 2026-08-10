export interface HistogramBin {
  name: string;
  value: number;
}
type Histogram = HistogramBin[];

// Poisson binomial distribution: dist[k] = P(exactly k answers correct),
// given per-question probabilities of being correct.
export function scoreDistribution(confidences): Histogram {
  let dist = [1];  // before any question: P(0 correct) = 1
  for (const p of confidences) {
    const next = new Array(dist.length + 1).fill(0);
    for (let k = 0; k < dist.length; k++) {
      next[k] += dist[k] * (1 - p);
      next[k + 1] += dist[k] * p;
    }
    dist = next;
  }
  return dist.map(
      (value, index): HistogramBin => ({name: index.toString(), value: value}));
}

export function filterHistogram(histogram: Histogram): Histogram {
  let startIndex = histogram.findIndex((p: HistogramBin) => p.value >= 0.001);
  let endIndex = histogram.findLastIndex((p) => p.value >= 0.001);
  return startIndex === -1 || endIndex === -1 ?
      histogram :
      histogram.slice(startIndex, endIndex + 1)
}

export function compressHistogram(
    histogram: Histogram, maxEntries: number): Histogram {
  if (histogram.length <= maxEntries) return histogram;
  const bucketSize = Math.ceil(histogram.length / maxEntries);
  const output: Histogram = [];
  for (let bucket = 0; bucket * bucketSize < histogram.length; bucket++) {
    const firstIndex = bucket * bucketSize;
    const nextIndex = Math.min((bucket + 1) * bucketSize, histogram.length);
    const sum = histogram.slice(firstIndex, nextIndex)
                    .reduce((sum, current) => sum + current.value, 0);
    const firstName = histogram[firstIndex].name;
    const lastName = histogram[nextIndex - 1].name;
    const bucketName =
        firstIndex + 1 === nextIndex ? firstName : `${firstName}-${lastName}`;
    output.push({name: bucketName, value: sum});
  }
  return output;
}

export function renderHistogram(container, dist: Histogram) {
  container.innerHTML = '';
  const maxValue = Math.max(...dist.map((p) => p.value));
  dist.forEach((p: HistogramBin) => {
    container
        .appendChild(Object.assign(
            document.createElement('div'),
            {className: 'bar' + (p.value === maxValue ? ' mode' : '')}))
        .append(
            Object.assign(document.createElement('div'), {
              className: 'bar-fill',
              style: `height: ${(p.value / maxValue * 100)}%`
            }),
            Object.assign(
                document.createElement('div'),
                {className: 'bar-label', textContent: p.name}),
            Object.assign(document.createElement('div'), {
              className: 'bar-value',
              textContent: (p.value * 100).toFixed(1) + '%'
            }));
  });
}
