import { Asset } from './InterfaceImplementations/Asset';
import { Wallet } from './InterfaceImplementations/Wallet';
import { initApp } from './lib';

initApp({
    el: '#app',
    essentials: {
        AssetConstructor: Asset,
        WalletConstructor: Wallet,
    },
});

