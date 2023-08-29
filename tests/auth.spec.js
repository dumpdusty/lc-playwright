//nex line is for auto checks of types
// @ts-check

import { test, expect } from '@playwright/test';

test.describe('Authentication & Authorisation', () => {
    test('Authorisation with valid credentials', async ({ page, context }) => {
        await page.goto('https://coding.pasv.us/user/login')

        await page.locator('#normal_login_email').fill('dumpdusty@gmail.com')

        await page.locator('#normal_login_password').fill('W3ss3rv1@@')

        await page.locator('[type="submit"]').click()

        await expect (page.locator('.ant-avatar-square')).toBeVisible()

    })
})