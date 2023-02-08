export interface Wallet {
    name: string;
    id: number;
    assets: Asset[];
}

export interface WalletConstructor {
    get(id: number): Wallet;
}

export interface AssetConstructor {
    get(ticker: string): Asset;
}

export interface Asset {
    trades: number;
    quotation: number;
    variation: number;
    date: Date;
    name: string;
    exchange: string;
    ticker: string;
    observe(): () => void;
    varClass(): string;
}
