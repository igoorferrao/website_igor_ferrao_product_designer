type Point = {
  x: number;
  y: number;
};

type TransitionConfig = {
  duration?: number;
  easing?: string;
};

const DEFAULT_DURATION = 800;
const DEFAULT_EASING = 'cubic-bezier(0.65, 0, 0.35, 1)';
const END_RADIUS = '160vmax';

function shouldReduceMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function getOrigin(point?: Partial<Point>): Point {
  return {
    x: point?.x ?? window.innerWidth / 2,
    y: point?.y ?? window.innerHeight / 2,
  };
}

export function runRadialRootTransition(run: () => void, point?: Partial<Point>, config: TransitionConfig = {}) {
  const canAnimate =
    typeof document.startViewTransition === 'function' &&
    typeof document.documentElement.animate === 'function' &&
    !shouldReduceMotion();

  if (!canAnimate) {
    run();
    return;
  }

  const { x, y } = getOrigin(point);
  const duration = config.duration ?? DEFAULT_DURATION;
  const easing = config.easing ?? DEFAULT_EASING;

  let hasRun = false;
  const runOnce = () => {
    if (hasRun) return;
    hasRun = true;
    run();
  };

  try {
    const transition = document.startViewTransition(runOnce);

    void transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${END_RADIUS} at ${x}px ${y}px)`],
          },
          {
            duration,
            easing,
            fill: 'forwards',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {
        // The theme has already changed; skip only the visual enhancement.
      });

    void transition.finished.catch(() => {
      // A newer transition may interrupt this one without affecting the theme change.
    });
  } catch {
    // Fall back to an immediate update if starting the transition itself fails.
    runOnce();
  }
}
