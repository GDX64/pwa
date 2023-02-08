import { Asset } from './AssetMob/Asset';
import { Wallet } from './AssetMob/Wallet';
import { initApp } from './lib';

initApp({
    el: '#app',
    essentials: {
        AssetConstructor: Asset,
        WalletConstructor: Wallet,
    },
});

