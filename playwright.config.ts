import { defineConfig, devices } from '@playwright/test';


require('dotenv').config(
  {
    path: `.env.${process.env.NODE_ENV? process.env.NODE_ENV: 'qa'}`
  }
);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout:30000,

  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'experimental-allure-playwright',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless:true,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        video:"on",
        screenshot:"only-on-failure",
        headless:true,
          },
    }
  ],

  

});
