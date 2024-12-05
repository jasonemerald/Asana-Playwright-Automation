import { test } from '@playwright/test';
import { AsanaPage } from '../Pages/AsanaPage';
const testData = require('../TestData/testTags.json');
let asanaPage: AsanaPage;

test.describe('Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Login Before EACH TEST
    asanaPage = new AsanaPage(page);
    await asanaPage.goto()
    await asanaPage.login()
  });

  testData.forEach((data: any) => {
    test(`${data.application} : Verify task "${data.taskName}" in ${data.column} with tags: ${data.tags}`, async () => {
      await asanaPage.goto()
      await asanaPage.openApplication(data.application);
      let task = await asanaPage.getTask(data.column, data.taskName)
      await asanaPage.verifyTaskTags(task, data.tags)
    });
  });
});
