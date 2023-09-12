import { test, expect } from '../common/test'
import { signIn } from '../common/signin'

test.describe('Navigation', () => {
  let page
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    // await loginPage.open()
    // await loginPage.login(process.env.EMAIL, process.env.PASSWORD)
    await signIn(page, process.env.EMAIL, process.env.PASSWORD)
  })
  test.afterAll(async () => {
    await page.close()
  })

  test('verify Courses link', async () => {
    await page.getByTestId('topmenu-Курсы').click()
    await expect(page).toHaveURL('/course')
    await expect(
      page.getByText('Курсы программирования и тестирования')
    ).toBeVisible()
  })

  test('verify Tasks link', async () => {
    await page.getByTestId('topmenu-Задачи').click()
    await expect(page).toHaveURL('/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()
  })

  test('verify Interview link', async () => {
    await page.getByTestId('topmenu-Интервью').click()
    await expect(page).toHaveURL('/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()
  })

  test('verify Diary link', async () => {
    await page.getByTestId('topmenu-Дневник').click()
    await expect(page).toHaveURL('/diary?page=1')
    await expect(page.getByText('Daily reports')).toBeVisible()
  })
})
