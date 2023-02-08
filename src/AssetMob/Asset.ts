import { faker } from '@faker-js/faker';
import { interval, merge, Observable, tap } from 'rxjs';
import { markRaw, reactive } from 'vue';
import { randomGen } from '../random/randomWalk';
import * as Interfaces from '../Interfaces/AssetInterface';

const assetMap = new Map<string, Asset>();
export class Asset implements Interfaces.Asset {
    trades = 0;
    quotation = 0;
    variation = 0;
    date = new Date();
    name = faker.name.fullName();
    obs$: Observable<number>;
    exchange = 'Bovespa';
    constructor(public ticker: string) {
        const asset = reactive(this);
        const quotation = randomGen({ initial: Math.random() * 100 }).pipe(
            tap((value) => {
                asset.quotation = value;
            }),
        );
        const variation = randomGen({ max: 30, min: -30 }).pipe(
            tap((value) => {
                asset.variation = value;
            }),
        );
        const trades = randomGen({ initial: Math.random() * 10 }).pipe(
            tap((value) => {
                asset.trades += Math.round(value);
            }),
        );
        const date = interval(3000 * Math.random()).pipe(
            tap(() => {
                asset.date.setTime(Date.now());
            }),
        );
        this.obs$ = markRaw(merge(quotation, variation, trades, date));
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
        const sub = this.obs$.subscribe();
        return () => sub.unsubscribe();
    }

    varClass() {
        return this.variation > 0 ? 'var-positive' : 'var-negative';
    }
}
