import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      'carbonpositive6.onrender.com',
      'www.gocarbonpositive.com',
      'localhost',
      '0.0.0.0',
    ],
  },
})
