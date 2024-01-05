import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        board: resolve(__dirname, 'src/pages/board/index.html'),
        togetherBoard: resolve(__dirname, 'src/pages/togetherBoard/index.html'),
        story: resolve(__dirname, 'src/pages/story/index.html'),
        exchange: resolve(__dirname, 'src/pages/exchange/index.html'),
        start: resolve(__dirname, 'src/pages/start/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        writeBoardSecond: resolve(__dirname, 'src/pages/profile/index.html'),
        writeBoardThird: resolve(__dirname, 'src/pages/profile/index.html'),
      },
    },
  },
});
