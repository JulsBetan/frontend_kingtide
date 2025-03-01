import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Leer la variable de entorno VITE_BASE_URL y usar '/' si no está definida
const BASE_URL = process.env.VITE_BASE_URL || '/';
 
// https://vite.dev/config/
export default defineConfig({
  base: BASE_URL,
  plugins: [vue()],
})
