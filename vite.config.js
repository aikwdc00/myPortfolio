import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // '@components': '/src/components',
            // '@assets': '/src/assets',
            // '@Reducer': '/src/stores',
            // '@customHook': '/src/hooks',
            // '@hooks': '/src/hooks',
            // '@Public': '/public',
            // '@Data': '/src/data',
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@Reducer': path.resolve(__dirname, 'src/stores'),
            '@customHook': path.resolve(__dirname, 'src/hooks'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@Public': path.resolve(__dirname, 'public'),
            '@Data': path.resolve(__dirname, 'src/data'),
            // 添加其他别名
        },
    },
    define: {
        'FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.VITE_AUTH_DOMAIN),
        'DATABASEURL': JSON.stringify(process.env.VITE_DATABASEURL),
        'PROJECTID': JSON.stringify(process.env.VITE_PROJECTID),
        'STORAGEBUCKET': JSON.stringify(process.env.VITE_STORAGEBUCKET),
        'MESSAGINGSENDERID': JSON.stringify(process.env.VITE_MESSAGINGSENDERID),
        'APPID': JSON.stringify(process.env.VITE_APPID),
        'MEASUREMENTID': JSON.stringify(process.env.VITE_MEASUREMENTID),
    },
    esbuild: {
        // Remove console.log during production build
        pure: process.env.NODE_ENV === "production" ? ["console.log"] : [],
    },
})
