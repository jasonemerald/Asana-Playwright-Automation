# Asana Playwright Automation

## Overview
This project is an automated testing solution for Asana, built using [Playwright](https://playwright.dev/), a modern end-to-end testing framework. The aim is to automate UI smoke tests for various features of the Asana application, ensuring that key functionalities are working as expected.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)
- [Debugging](#debugging)
- [Contributing](#contributing)

## Features
- Automated UI testing using Playwright.
- Environment management using `.env` files.
- Support for both headless and headed test runs.
- Generates HTML and JUnit reports.
- Records video of all test executions.

## Installation

### Prerequisites
- **Node.js** (v18.x recommended) must be installed.
- **npm** comes along with Node.js.
- Playwright will automatically download its required browser binaries.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/jasonmelnik/Asana-Playwright-Automation.git
    cd Asana-Playwright-Automation
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## Usage

### Setting Environment Variables
Create a `.env` file inside the `config/` folder for environment-specific configurations:
```env
URL=https://your-asana-instance-url.com
USER=your-asana-username
PASS=your-asana-password
```

You can also create `.env.test` or `.env.dev` to handle multiple environments.

### Running the Tests on Your Own GitHub Repository
If you want to run these tests using GitHub Actions in your own repository, you need to set up **GitHub Secrets** for storing sensitive information securely. These secrets will be used in your CI/CD pipeline:

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.
3. Create secrets for:
   - `URL`: The Asana URL (e.g., `https://your-asana-instance-url.com`)
   - `USER`: Your Asana username or email.
   - `PASS`: Your Asana password.
4. These secrets will be accessed during GitHub Actions runs to provide credentials securely without exposing them in your repository.

Once the secrets are created, they will be automatically referenced in the GitHub Actions workflow file (`.github/workflows/main.yml`) like so:
```yaml
env:
  URL: ${{ secrets.URL }}
  USER: ${{ secrets.USER }}
  PASS: ${{ secrets.PASS }}
```

This ensures that your sensitive data remains safe while still allowing the automation scripts to run effectively in CI/CD.

## Scripts
- **Run all tests**:
  ```bash
  npm run test
  ```
- **Run tests in headed mode**:
  ```bash
  npm run test --headed
  ```
- **Run tests with video recording enabled** (both pass and fail):
  By default, videos will be recorded for all tests, as per the Playwright configuration.

## Folder Structure
```
asana-automation/
│
├── config/
│   ├── .env            # Main environment variables file
│   ├── .env.test       # Environment file for test configuration
│
├── Pages/
│   ├── AsanaPage.ts    # Page Object model for Asana interactions
│
├── tests/
│   ├── tests.spec.ts   # Test scenarios for Asana
│
├── playwright-report/  # Playwright HTML reports (generated after test runs)
├── test-results/       # Test results for CI/CD (JUnit XML format)
│
├── package.json        # NPM package configuration
├── playwright.config.ts # Playwright configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Running Tests

1. **Run Tests in Headless Mode**:
    ```bash
    npm run test
    ```
   - By default, tests will run in headless mode to speed up the process.

2. **Run Tests in Headed Mode**:
    ```bash
    npm run test:headed
    ```
   - This will show the browser while tests are running, which is helpful for debugging.

3. **Run Tests in CI/CD**:
   - Use the GitHub Actions workflow (`.github/workflows/main.yml`) to run the tests automatically on `push` or manually through workflow dispatch.

## Debugging
- Use **`page.pause()`** in your test code to pause execution and launch the Playwright Inspector for debugging.
- View HTML reports generated at `playwright-report/` to identify failed tests.
- Videos of both passed and failed tests can be found in the `videos/` folder for review.

### Example Debug Command
```typescript
await page.pause(); // Add this line to pause the script and inspect manually
```

## Contributing
Contributions are welcome! If you'd like to improve this automation, please follow these steps:
1. **Fork the repository**.
2. **Create a feature branch**: 
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**: 
   ```bash
   git commit -m "Add a new feature"
   ```
4. **Push to the branch**: 
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request**.

## Contact
If you have any questions or suggestions, feel free to open an issue or reach out via email.