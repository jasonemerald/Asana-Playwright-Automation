import { Page, Locator, expect } from '@playwright/test';

export class AsanaPage {
  private page: Page;

  // Login Fields
  private usernameField: Locator;
  private passwordField: Locator;
  private signInButton: Locator;

  // ApplicationTabs
  private WebApplication: Locator;
  private MobileApplication: Locator;
  private MarketingCampaign: Locator;

  // Collumns
  private ToDoCollumn: Locator;
  private InProgressCollumn: Locator;
  private ReviewCollumn: Locator;
  private DoneCollumn: Locator;

  // Other Selectors

  constructor(page: Page) {
    this.page = page;
    // Define locators
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.signInButton = page.getByRole('button').getByText('Sign in');
    this.WebApplication = page.getByRole('button').getByText('Web Application').last();
    this.MobileApplication = page.getByRole('button').getByText('Mobile Application').last();
    this.MarketingCampaign = page.getByRole('button').getByText('Marketing Campaign').last();
    this.ToDoCollumn = page.getByText('To Do').locator('..');
    this.InProgressCollumn = page.getByText('In Progress').locator('..');
    this.ReviewCollumn = page.getByText('Review').locator('..');
    this.DoneCollumn = page.getByText('Done').locator('..');
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

  async openApplication(applicationName: string): Promise<void> {
    switch (applicationName) {
      case "Web Application":
        this.WebApplication.click();
        break;
      case "Mobile Application":
        this.MobileApplication.click();
        break;
      case "Marketing Campaign":
        this.MarketingCampaign.click();
        break;
    }

    await expect(this.page.locator('header').getByText(applicationName).first()).toBeVisible();
  }

  async getTask(columnName: string, taskName: string): Promise<Locator> {
    let column: Locator;
    switch (columnName) {
      case "To Do":
        column = this.ToDoCollumn;
        break;
      case "In Progress":
        column = this.InProgressCollumn;
        break;
      case "Review":
        column = this.ReviewCollumn;
        break;
      case "Done":
        column = this.DoneCollumn;
        break;
      default:
        column = this.ToDoCollumn;
        break;
    }

    return column.getByText(taskName).locator('..');
  }

  async verifyTaskTags(task: Locator, tags: string[]): Promise<void> {
    tags.forEach(async (tagName) => {
      await expect(task.getByText(tagName).first()).toBeVisible();
    });
  }
}