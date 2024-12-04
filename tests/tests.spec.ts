import { test, expect, Page } from '@playwright/test';
import { AsanaPage } from '../Pages/AsanaPage';

test.only('Login Test', async ({ page }) => {
    const asanaPage = new AsanaPage(page);
    await asanaPage.goto()
    await asanaPage.login()
});