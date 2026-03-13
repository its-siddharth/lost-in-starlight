import { defineConfig } from 'vite';

export default defineConfig({
    base: '/lost-in-starlight/',
    root: '.',
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    server: {
        open: true
    }
});
