type Point = {
  x: number;
  y: number;
};

type TransitionConfig = {
  duration?: number;
  easing?: string;
  fadeDuration?: number;
  color?: string;
};

const DEFAULT_DURATION = 380;
const DEFAULT_FADE_DURATION = 140;
const DEFAULT_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';
const OVERLAY_SIZE = 100;

let finishActiveTransition: (() => void) | null = null;

function shouldReduceMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function getOrigin(point?: Partial<Point>): Point {
  return {
    x: Math.min(Math.max(point?.x ?? window.innerWidth / 2, 0), window.innerWidth),
    y: Math.min(Math.max(point?.y ?? window.innerHeight / 2, 0), window.innerHeight),
  };
}

function getEndRadius(x: number, y: number) {
  return Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
}

function waitForNextPaint() {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => resolve());
    });
  });
}

export function runRadialRootTransition(
  run: () => void,
  point?: Partial<Point>,
  config: TransitionConfig = {}
) {
  if (shouldReduceMotion()) {
    run();
    return;
  }

  finishActiveTransition?.();

  const { x, y } = getOrigin(point);
  const endRadius = getEndRadius(x, y);
  const duration = config.duration ?? DEFAULT_DURATION;
  const fadeDuration = config.fadeDuration ?? DEFAULT_FADE_DURATION;
  const easing = config.easing ?? DEFAULT_EASING;
  const overlay = document.createElement('div');

  overlay.className = 'theme-transition-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.style.left = `${x}px`;
  overlay.style.top = `${y}px`;
  overlay.style.backgroundColor = config.color ?? window.getComputedStyle(document.body).backgroundColor;

  document.body.append(overlay);

  let hasRun = false;
  const runOnce = () => {
    if (hasRun) return;
    hasRun = true;
    run();
  };

  if (typeof overlay.animate !== 'function') {
    overlay.remove();
    runOnce();
    return;
  }

  let hasCleanedUp = false;
  const cleanUp = () => {
    if (hasCleanedUp) return;
    hasCleanedUp = true;
    overlay.remove();
    if (finishActiveTransition === finish) finishActiveTransition = null;
  };

  const finish = () => {
    try {
      runOnce();
    } finally {
      cleanUp();
    }
  };

  finishActiveTransition = finish;

  const finalScale = (endRadius * 2) / OVERLAY_SIZE;
  const expansion = overlay.animate(
    [
      { transform: 'translate(-50%, -50%) scale(0)' },
      { transform: `translate(-50%, -50%) scale(${finalScale})` },
    ],
    {
      duration,
      easing,
      fill: 'forwards',
    }
  );

  void expansion.finished
    .then(async () => {
      runOnce();
      await waitForNextPaint();

      if (hasCleanedUp) return;

      const fade = overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: fadeDuration,
        easing: 'ease-out',
        fill: 'forwards',
      });

      await fade.finished.catch(() => undefined);
      cleanUp();
    })
    .catch(finish);
}
