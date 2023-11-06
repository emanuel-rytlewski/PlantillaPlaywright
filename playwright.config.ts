const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list', // Cambiado a 'list' para la integración con Allure
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    permissions: ['geolocation'],
    geolocation: { latitude: 48.8566, longitude: 2.3522 },
  },
  projects: [
    {
      name: 'chromium',
      grepInvert: /disabled/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      grepInvert: /disabled/,
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      grepInvert: /disabled/,
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      grepInvert: /exclude-mobile|disabled/,
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      grepInvert: /exclude-mobile|disabled/,
      use: { ...devices['iPhone 12'] },
    },
  ],
  outputDir: 'test-results/',
});
