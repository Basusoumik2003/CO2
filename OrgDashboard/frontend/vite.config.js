import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'carbonpositive6.onrender.com',
      'www.gocarbonpositive.com',
      'localhost',
      '0.0.0.0',
    ],
  },
})
