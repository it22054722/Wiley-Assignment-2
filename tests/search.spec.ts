import { test, expect } from '@playwright/test';

test('TC_A7: Verify search with empty input', async ({ page }) => {
  // Navigate to the website with a search bar
  await page.goto('https://example.com');

  // Leave the search bar empty and click "Search"
  await page.click('button[type="submit"]');

  // Verify that the search results handle the empty input
  const searchMessage = await page.locator('text=Search: (input field empty)');
  await expect(searchMessage).toBeVisible();
});
