import { audit, interval, scan, share } from "rxjs";

const auditMaster = interval(200).pipe(share());

export function randomGen({ sigma = 1, max = 100, min = 0, initial = 0 }) {
  return interval(200 + 500 * Math.random()).pipe(
    scan((acc) => {
      const updated = Math.min(
        Math.max(acc + (Math.random() - 0.5) * sigma, min),
        max
      );
      return Math.round(updated * 100) / 100;
    }, initial),
    audit(() => auditMaster),
    share({ resetOnRefCountZero: true })
  );
}
