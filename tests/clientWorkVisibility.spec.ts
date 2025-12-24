import { test, expect } from '@playwright/test';

test('Verify Client Work text visibility on EPAM website', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on "Services" in the header menu
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Click on "Explore Our Client Work" link
  await page.getByText('Explore Our Client Work').first().click();

  // Verify that "Client Work" text is visible on the page
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});