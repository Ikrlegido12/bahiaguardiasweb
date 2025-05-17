// Suggested code may be subject to a license. Learn more: ~LicenseLog:2587226798.
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import clerk from "@clerk/astro";

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), clerk()],

  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: 'standalone',
  }),
});