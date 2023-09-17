//next line is for auto checks of types
// @ts-check

import { test, expect } from '../common/test'

test.describe('Authentication & Authorisation', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open()
  })


  test('Authorisation with valid credentials', async ({ page, loginPage }) => {
    await loginPage.input.email.fill(process.env.EMAIL)
    await loginPage.input.password.fill(process.env.PASSWORD)
    await loginPage.button.submit.click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Authorisation with invalid credentials', async ({ loginPage }) => {
    await loginPage.input.email.fill('invalid@gmail.com')
    await loginPage.input.password.fill('invalid')
    await loginPage.button.submit.click()

    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
  })

  // test.afterEach(async ({ page }, testInfo) => {
  //   console.log(`Finished ${testInfo.title} with status ${testInfo.status}`)
  // })

})
