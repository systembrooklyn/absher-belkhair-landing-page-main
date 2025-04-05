import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbzUBKDvw1SC9CrXIN3X6OD8ulVC0al5kRNbTN-G86UOyJVPp8Rrz_MjMtJAkLCVGwho/exec",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [vue()],
})
