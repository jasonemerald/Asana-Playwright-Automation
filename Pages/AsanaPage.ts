import { Page, Locator } from '@playwright/test';

export class AsanaPage {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Define locators
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.signInButton = page.getByRole('button').getByText('Sign in');
  }

  async goto() {
    await this.page.goto(process.env.URL as string, { waitUntil: 'networkidle' });

  }

  // Function to log in
  async login(): Promise<void> {
    await this.usernameField.fill(process.env.USER as string);
    await this.passwordField.fill(process.env.PASS as string);
    await this.signInButton.click();
  }
}