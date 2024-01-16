// vite.config.js
import { resolve } from 'node:path';
import { defineConfig } from 'file:///C:/Users/dlrud/likelion-8/vanilla-project/popcorn-euid/node_modules/vite/dist/node/index.js';
import image from 'file:///C:/Users/dlrud/likelion-8/vanilla-project/popcorn-euid/node_modules/@rollup/plugin-image/dist/es/index.js';
var __vite_injected_original_dirname =
  'C:\\Users\\dlrud\\likelion-8\\vanilla-project\\popcorn-euid';
var vite_config_default = defineConfig({
  plugins: [image()],
  esbuild: {
    supported: {
      'top-level-await': true,
      //browsers can handle top-level-await features
    },
  },
  build: {
    outDir: 'docs',
    target: 'esnext',
    //browsers can handle the latest ES features
    base: '/popcorn-euid/',
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, 'index.html'),
        togetherBoard: resolve(
          __vite_injected_original_dirname,
          'src/pages/togetherBoard/index.html'
        ),
        story: resolve(
          __vite_injected_original_dirname,
          'src/pages/story/index.html'
        ),
        search: resolve(
          __vite_injected_original_dirname,
          'src/pages/search/index.html'
        ),
        exchangeBoard: resolve(
          __vite_injected_original_dirname,
          'src/pages/exchangeBoard/index.html'
        ),
        exchange: resolve(
          __vite_injected_original_dirname,
          'src/pages/exchange/index.html'
        ),
        start: resolve(
          __vite_injected_original_dirname,
          'src/pages/start/index.html'
        ),
        chat: resolve(
          __vite_injected_original_dirname,
          'src/pages/chat/index.html'
        ),
        category: resolve(
          __vite_injected_original_dirname,
          'src/pages/category/index.html'
        ),
        signUp: resolve(
          __vite_injected_original_dirname,
          'src/pages/signUp/index.html'
        ),
        login: resolve(
          __vite_injected_original_dirname,
          'src/pages/login/index.html'
        ),
        profile: resolve(
          __vite_injected_original_dirname,
          'src/pages/profile/index.html'
        ),
        profileCard: resolve(
          __vite_injected_original_dirname,
          'src/pages/profileCard/index.html'
        ),
        profileDetails: resolve(
          __vite_injected_original_dirname,
          'src/pages/profileDetails/index.html'
        ),
        board: resolve(
          __vite_injected_original_dirname,
          'src/pages/board/index.html'
        ),
        boardContet: resolve(
          __vite_injected_original_dirname,
          'src/pages/boardContent/index.html'
        ),
        chatScreen: resolve(
          __vite_injected_original_dirname,
          'src/pages/chatScreen/index.html'
        ),
        writeBoard: resolve(
          __vite_injected_original_dirname,
          'src/pages/writeBoard/index.html'
        ),
      },
    },
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkbHJ1ZFxcXFxsaWtlbGlvbi04XFxcXHZhbmlsbGEtcHJvamVjdFxcXFxwb3Bjb3JuLWV1aWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRscnVkXFxcXGxpa2VsaW9uLThcXFxcdmFuaWxsYS1wcm9qZWN0XFxcXHBvcGNvcm4tZXVpZFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZGxydWQvbGlrZWxpb24tOC92YW5pbGxhLXByb2plY3QvcG9wY29ybi1ldWlkL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgaW1hZ2UgZnJvbSAnQHJvbGx1cC9wbHVnaW4taW1hZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbaW1hZ2UoKV0sXHJcblxyXG4gIGVzYnVpbGQ6IHtcclxuICAgIHN1cHBvcnRlZDoge1xyXG4gICAgICAndG9wLWxldmVsLWF3YWl0JzogdHJ1ZSwgLy9icm93c2VycyBjYW4gaGFuZGxlIHRvcC1sZXZlbC1hd2FpdCBmZWF0dXJlc1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdkb2NzJyxcclxuICAgIHRhcmdldDogJ2VzbmV4dCcsIC8vYnJvd3NlcnMgY2FuIGhhbmRsZSB0aGUgbGF0ZXN0IEVTIGZlYXR1cmVzXHJcbiAgICBiYXNlOiAnL3BvcGNvcm4tZXVpZC8nLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIG1haW46IHJlc29sdmUoX19kaXJuYW1lLCAnaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHRvZ2V0aGVyQm9hcmQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL3RvZ2V0aGVyQm9hcmQvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHN0b3J5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9zdG9yeS9pbmRleC5odG1sJyksXHJcbiAgICAgICAgc2VhcmNoOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9zZWFyY2gvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGV4Y2hhbmdlQm9hcmQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL2V4Y2hhbmdlQm9hcmQvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGV4Y2hhbmdlOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9leGNoYW5nZS9pbmRleC5odG1sJyksXHJcbiAgICAgICAgc3RhcnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL3N0YXJ0L2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBjaGF0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9jaGF0L2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBjYXRlZ29yeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvY2F0ZWdvcnkvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHNpZ25VUDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvc2lnblVwL2luZGV4Lmh0bWwnKSxcclxuICAgICAgICBsb2dpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvbG9naW4vaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHByb2ZpbGU6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL3Byb2ZpbGUvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHByb2ZpbGVDYXJkOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9wcm9maWxlQ2FyZC9pbmRleC5odG1sJyksXHJcbiAgICAgICAgcHJvZmlsZURldGFpbHM6IHJlc29sdmUoXHJcbiAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAnc3JjL3BhZ2VzL3Byb2ZpbGVEZXRhaWxzL2luZGV4Lmh0bWwnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBib2FyZDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMvYm9hcmQvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGJvYXJkQ29udGV0OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9wYWdlcy9ib2FyZENvbnRlbnQvaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIGNoYXRTY3JlZW46IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL2NoYXRTY3JlZW4vaW5kZXguaHRtbCcpLFxyXG4gICAgICAgIHdyaXRlQm9hcmQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzL3dyaXRlQm9hcmQvaW5kZXguaHRtbCcpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLGVBQWU7QUFDeFgsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUVqQixTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxtQkFBbUI7QUFBQTtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUEsUUFDTCxNQUFNLFFBQVEsa0NBQVcsWUFBWTtBQUFBLFFBQ3JDLGVBQWUsUUFBUSxrQ0FBVyxvQ0FBb0M7QUFBQSxRQUN0RSxPQUFPLFFBQVEsa0NBQVcsNEJBQTRCO0FBQUEsUUFDdEQsUUFBUSxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLFFBQ3hELGVBQWUsUUFBUSxrQ0FBVyxvQ0FBb0M7QUFBQSxRQUN0RSxVQUFVLFFBQVEsa0NBQVcsK0JBQStCO0FBQUEsUUFDNUQsT0FBTyxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLFFBQ3RELE1BQU0sUUFBUSxrQ0FBVywyQkFBMkI7QUFBQSxRQUNwRCxVQUFVLFFBQVEsa0NBQVcsK0JBQStCO0FBQUEsUUFDNUQsUUFBUSxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLFFBQ3hELE9BQU8sUUFBUSxrQ0FBVyw0QkFBNEI7QUFBQSxRQUN0RCxTQUFTLFFBQVEsa0NBQVcsOEJBQThCO0FBQUEsUUFDMUQsYUFBYSxRQUFRLGtDQUFXLGtDQUFrQztBQUFBLFFBQ2xFLGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBTyxRQUFRLGtDQUFXLDRCQUE0QjtBQUFBLFFBQ3RELGFBQWEsUUFBUSxrQ0FBVyxtQ0FBbUM7QUFBQSxRQUNuRSxZQUFZLFFBQVEsa0NBQVcsaUNBQWlDO0FBQUEsUUFDaEUsWUFBWSxRQUFRLGtDQUFXLGlDQUFpQztBQUFBLE1BQ2xFO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
