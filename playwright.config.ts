import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load base .env file first
dotenv.config({ path: path.resolve(__dirname, 'config/.env') });

// Then load environment-specific .env file, if ENV is specified
const environment = process.env.ENV || 'dev'; // Default to 'dev' if no ENV is specified
const envFilePath = path.resolve(__dirname, `config/.env.${environment}`);
dotenv.config({ path: envFilePath });

export default defineConfig({
  timeout: 30000,
  testDir: 'tests',
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'on'
  },
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }]
  ],
});
