import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5174', // Update the port if your Vite app runs on a different port
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
