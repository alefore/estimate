// Poisson binomial distribution: dist[k] = P(exactly k answers correct),
// given per-question probabilities of being correct.
export function scoreDistribution(confidences) {
  let dist = [1];  // before any question: P(0 correct) = 1
  for (const p of confidences) {
    const next = new Array(dist.length + 1).fill(0);
    for (let k = 0; k < dist.length; k++) {
      next[k] += dist[k] * (1 - p);
      next[k + 1] += dist[k] * p;
    }
    dist = next;
  }
  return dist;
}

export function renderHistogram(container, dist) {
  container.innerHTML = '';
  const max = Math.max(...dist);
  const mode = dist.indexOf(max);
  dist.forEach((p, k) => {
    const bar = document.createElement('div');
    bar.className = 'bar' + (k === mode ? ' mode' : '');

    const value = document.createElement('div');
    value.className = 'bar-value';
    value.textContent = (p * 100).toFixed(1) + '%';

    const fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.style.height = (p / max * 100) + '%';

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = k;

    bar.append(value, fill, label);
    container.appendChild(bar);
  });
}
