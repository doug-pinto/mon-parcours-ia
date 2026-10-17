const DURATION_MS = 450;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Défilement vers une ancre avec une durée fixe et courte (le smooth natif est trop lent sur les longues distances).
export function scrollToHash(hash: string): boolean {
  const target = document.querySelector<HTMLElement>(hash);
  if (!target) return false;

  const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const start = window.scrollY;
  const end = Math.max(0, target.getBoundingClientRect().top + start - offset);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  history.pushState(null, "", hash);

  if (reduceMotion || start === end) {
    window.scrollTo(0, end);
    return true;
  }

  const startTime = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - startTime) / DURATION_MS, 1);
    window.scrollTo(0, start + (end - start) * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  return true;
}
