import { expect, test } from '@playwright/test';

test.skip('test', async ({ page }) => {
    await page.goto('/');
    expect(await page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await page.getByRole('heading', { level: 1 })).toHaveText(
        'Home Page'
    );
});
