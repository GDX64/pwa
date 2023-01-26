import { interval, scan, share } from "rxjs";

export function randomGen({ sigma = 1, max = 100, min = 0, initial = 0 }) {
  return interval(500).pipe(
    scan((acc) => {
      const updated = Math.min(
        Math.max(acc + (Math.random() - 0.5) * sigma, min),
        max
      );
      return Math.round(updated * 100) / 100;
    }, initial),
    share({ resetOnRefCountZero: true })
  );
}
