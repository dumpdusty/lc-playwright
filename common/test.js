import { test as base, expect } from '@playwright/test'
import LoginPage from '../pages/login.page'

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
})

export { test, expect }
