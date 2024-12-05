import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

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
