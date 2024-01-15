import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import image from '@rollup/plugin-image';

export default defineConfig({
  plugins: [image()],

  esbuild: {
    supported: {
      'top-level-await': true, //browsers can handle top-level-await features
    },
  },
  build: {
    outDir: 'docs',
    target: 'esnext', //browsers can handle the latest ES features
    base: '/popcorn-euid/',
    rollupOptions: {
      input: {
        board: resolve(__dirname, 'src/pages/board/index.html'),
        boardContet: resolve(__dirname, 'src/pages/boardContent/index.html'),
        category: resolve(__dirname, 'src/pages/category/index.html'),
        chat: resolve(__dirname, 'src/pages/chat/index.html'),
        chatScreen: resolve(__dirname, 'src/pages/chatScreen/index.html'),
        exchange: resolve(__dirname, 'src/pages/exchange/index.html'),
        exchangeBoard: resolve(__dirname, 'src/pages/exchangeBoard/index.html'),
        exchangeEdit: resolve(__dirname, 'src/pages/exchangeEdit/index.html'),
        exchangePost: resolve(__dirname, 'src/pages/exchangePost/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        profileCard: resolve(__dirname, 'src/pages/profileCard/index.html'),
        profileDetails: resolve(
          __dirname,
          'src/pages/profileDetails/index.html'
        ),
        search: resolve(__dirname, 'src/pages/search/index.html'),
        signUp: resolve(__dirname, 'src/pages/signUp/index.html'),
        start: resolve(__dirname, 'src/pages/start/index.html'),
        togetherBoard: resolve(__dirname, 'src/pages/togetherBoard/index.html'),
        writeBoard: resolve(__dirname, 'src/pages/writeBoard/index.html'),
        story: resolve(__dirname, 'src/pages/story/index.html'),
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
