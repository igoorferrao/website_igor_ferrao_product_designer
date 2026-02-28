type Point = {
  x: number;
  y: number;
};

type TransitionConfig = {
  duration?: number;
  easing?: string;
};

const DEFAULT_DURATION = 560;
const DEFAULT_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

function shouldReduceMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
}

function getOrigin(point?: Partial<Point>): Point {
  return {
    x: point?.x ?? window.innerWidth / 2,
    y: point?.y ?? window.innerHeight / 2,
  };
}

function getEndRadius(x: number, y: number) {
  return Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
}

export function runRadialRootTransition(
  run: () => void,
  point?: Partial<Point>,
  config: TransitionConfig = {}
) {
  if (!('startViewTransition' in document) || shouldReduceMotion()) {
    run();
    return;
  }

  const { x, y } = getOrigin(point);
  const endRadius = getEndRadius(x, y);
  const duration = config.duration ?? DEFAULT_DURATION;
  const easing = config.easing ?? DEFAULT_EASING;

  const transition = document.startViewTransition(run);
  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing,
        fill: 'both',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  });
}
