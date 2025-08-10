import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // Ustawienie base tylko na potrzeby produkcji
    base: process.env.NODE_ENV === 'production' ? '/MyOwnPortfolio/' : '/',
})
