import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@Reducer': '/src/stores',
      '@customHook': '/src/hooks',
      '@hook': '/src/hooks',
      '@Public': '/public',
      '@Data': '/src/data',
      // 添加其他别名
    },
  },
  esbuild: {
    // Remove console.log during production build
    pure: process.env.NODE_ENV === "production" ? ["console.log"] : [],
  },
})
