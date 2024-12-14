import { test, expect } from '@playwright/test';

test('TC_A1: Verify registration with valid inputs', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://example.com/register');

  // Fill out the registration form
  await page.fill('input[name="email"]', 'Manthi12@gmail.com');
  await page.fill('input[name="firstName"]', 'Madora');
  await page.fill('input[name="lastName"]', 'Weerasinghe');
  await page.fill('input[name="country"]', 'Sri Lanka');
  await page.fill('input[name="password"]', 'Manthi@1234');

  // Accept terms and conditions
  await page.check('input[type="checkbox"][name="terms"]');

  // Click on "Confirm" or Register button
  await page.click('button[type="submit"]');

  // Verify expected result: Registration confirmation message
  const confirmationMessage = await page.locator('text=Account created successfully');
  await expect(confirmationMessage).toBeVisible();
});
