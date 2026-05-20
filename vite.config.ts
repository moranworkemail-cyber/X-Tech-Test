import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSharp } from 'vite-plugin-sharp'

export default defineConfig({
  plugins: [
    react(),
    viteSharp({
      // This tells the plugin to target the images inside your public folder
      presets: {
        publicImages: {
          // We leave the format out so it keeps your original .png/.jpg filenames,
          // but we aggressively compress their internal file weights!
          quality: 75, 
        },
      },
    }),
  ],
})