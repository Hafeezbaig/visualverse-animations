import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        visualverse: ['visualverse', 'sanf-serif'],
        general: ['general', 'sanf-serif'],
        'circular-web': ['circular-web', 'sanf-serif'],
        'robert-medium': ['robert-medium', 'sanf-serif'],
        'robert-regular': ['robert-regular', 'sanf-serif'],
      },

      
    },
  },

  plugins: [react(),
    tailwindcss(),

  ],
})
