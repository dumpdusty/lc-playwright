//next line is for auto checks of types
// @ts-check

import { test, expect } from '@playwright/test'

test.describe('Authentication & Authorisation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/user/login')
  })
  test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`)
  })
  test('Authorisation with valid credentials', async ({ page, context }) => {
    await page.locator('#normal_login_email').fill(process.env.EMAIL)
    await page.locator('#normal_login_password').fill(process.env.PASSWORD)
    await page.locator('[type="submit"]').click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Authorisation with invalid credentials', async ({ page }) => {
    await page.locator('#normal_login_email').fill('invalid@gmail.com')
    await page.locator('#normal_login_password').fill('invalid')
    await page.locator('[type="submit"]').click()

    const toast = page.locator('.ant-notification-notice-error')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText('User login. Fail')
  })
})
