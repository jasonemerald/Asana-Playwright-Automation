import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config({ path: './config/.env' });

export default defineConfig({
  timeout: 30000,
  testDir: 'tests',
  use: {
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'on',
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report'}], // Generates a human-readable HTML report
    ['junit', { outputFile: 'test-results/results.xml' }] // Generates a JUnit XML report for CI/CD
  ],
});
