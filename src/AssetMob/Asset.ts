import { tsImportEqualsDeclaration } from "@babel/types";
import { merge, Observable, tap } from "rxjs";
import { markRaw, reactive } from "vue";
import { randomGen } from "../random/randomWalk";

const assetMap = new Map<string, Asset>();
export class Asset {
  quotation = 0;
  variation = 0;
  obs$: Observable<number>;
  exchange = "Bovespa";
  constructor(public ticker: string) {
    const asset = reactive(this);
    const quotation = randomGen({ initial: Math.random() * 100 }).pipe(
      tap((value) => {
        asset.quotation = value;
      })
    );
    const variation = randomGen({ max: 30, min: -30 }).pipe(
      tap((value) => {
        asset.variation = value;
      })
    );
    this.obs$ = markRaw(merge(quotation, variation));
  }

  static get(ticker: string): Asset {
    const asset = assetMap.get(ticker);
    if (asset) {
      return asset;
    }
    const assetNow = new Asset(ticker);
    assetMap.set(ticker, assetNow);
    return assetNow;
  }

  observe() {
    return this.obs$.subscribe();
  }

  varClass() {
    return this.variation > 0 ? "var-positive" : "var-negative";
  }
}
