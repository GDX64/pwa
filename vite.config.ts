import { defineConfig, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: getBuildMode(),
    plugins: [
        vue(),
        dts({}),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'script',
            devOptions: { enabled: true },
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
            manifest: {
                name: 'PWA',
                short_name: 'PWA',
                description: 'This is a PWA test',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
});

function getBuildMode(): UserConfig['build'] {
    if (process.env.BUILD_MODE !== 'lib') {
        return {};
    }
    return {
        lib: {
            entry: path.resolve(__dirname, './src/lib.ts'),
            fileName: 'lib',
            name: 'lib',
        },
    };
}

