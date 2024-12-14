import { test, expect } from '@playwright/test';

test('TC_A3: Verify login with valid credentials', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://example.com/login');

  // Enter valid credentials
  await page.fill('input[name="email"]', 'Manthi12@gmail.com');
  await page.fill('input[name="password"]', 'Manthi@1234');

  // Click on "Login" button
  await page.click('button[type="submit"]');

  // Verify successful login (e.g., navigation to home page)
  const homePageText = await page.locator('text=Welcome to Home Page');
  await expect(homePageText).toBeVisible();
});
