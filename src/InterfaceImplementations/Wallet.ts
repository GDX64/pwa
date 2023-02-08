import { faker } from '@faker-js/faker';
import { Asset } from './Asset';

const walletMap = new Map<number, Wallet>();

export class Wallet {
    name = faker.lorem.word({ length: 10 });
    assets: Asset[];
    constructor(public id: number) {
        const walletSize = Math.round(30 + 20 * Math.random());
        const tickers = [...Array(walletSize)].map(() => faker.lorem.word({ length: 5 }).toUpperCase());
        this.assets = tickers.map((ticker) => Asset.get(ticker));
    }

    static get(id: number): Wallet {
        const wallet = walletMap.get(id);
        if (wallet) {
            console.log(walletMap);
            return wallet;
        }
        const newWallet = new Wallet(id);
        walletMap.set(id, newWallet);
        return newWallet;
    }
}

