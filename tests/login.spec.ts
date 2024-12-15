import { test, expect } from '@playwright/test';

test('TC_A3: Verify login with valid credentials', async ({ page }) => {
  // Navigate to the Wiley login page
  await page.goto('https://wiley.scienceconnect.io/login');

  // Enter valid credentials
  await page.fill('input[name="email"]', 'manthimadora14@gmail.com');
  await page.fill('input[name="password"]', 'Manthi@04144');

  // Click on the "Login" button
  await page.click('button[type="submit"]');

  // Verify successful login (e.g., navigation to home page or dashboard)
  const homePageText = await page.locator('text=Welcome to Home Page'); // Adjust text as per actual UI
  await expect(homePageText).toBeVisible();
});
