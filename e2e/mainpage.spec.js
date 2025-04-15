import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
        'Next.Js 14 Typescript App'
    );
});
