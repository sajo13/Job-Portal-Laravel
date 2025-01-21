import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,  // Refresh Laravel views on file changes
        }),
    ],
    server: {
        host: '0.0.0.0',
        hmr: {
            protocol: 'ws',
            host: 'localhost',  // HMR WebSocket should target localhost
        },
        cors: {
            origin: 'http://127.0.0.1:8000',  // Allow requests from Laravel's URL
        },
    },
});
