
 import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'


 export default defineConfig({
   plugins: [react()],
   base:"/virtus/",
 });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     react(),
//     VitePWA({
//       manifest: {
//         name: 'VirtusConnect',
//         short_name: 'VirtusConnect',
//         start_url: 'https://david-ric.github.io/virtusconnect/',
//         display: 'standalone',
//         background_color: '#ffffff',
//         theme_color: '#000000',
//         icons: [
//           {
//             src: '/icon.png',
//             sizes: '192x192',
//             type: 'image/png',
//           },
//           {
//             src: '/icon-512.png',
//             sizes: '512x512',
//             type: 'image/png',
//           },
//         ],
//       },
//       workbox: {
//         runtimeCaching: [
//           {
//             urlPattern: /^https:\/\/david-ric\.github\.io\/virtusconnect\//,
//             handler: 'NetworkOnly',
//           },
//         ],
//       },
//     }),
//   ],
//   base: '/virtusconnect/',
// });

