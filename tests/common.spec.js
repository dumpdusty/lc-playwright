import { test, expect } from '../common/test'

test.describe('Navigation', () => {

  test.beforeEach(async({loginPage}) => {
    await loginPage.open()
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD)
  })


  test('verify Courses link', async ({page, loginPage}) => {
    await loginPage.navbar.courses.click()
    await expect(page).toHaveURL('/course')
    await expect(
      page.getByText('Курсы программирования и тестирования')
    ).toBeVisible()
  })

  test('verify Tasks link', async ({page, loginPage}) => {
    await loginPage.navbar.tasks.click()
    await expect(page).toHaveURL('/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()
  })

  test('verify Interview link', async ({page, loginPage}) => {
    await loginPage.navbar.interview.click()
    await expect(page).toHaveURL('/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()
  })

  test('verify Diary link', async ({page, loginPage}) => {
    await loginPage.navbar.diary.click()
    await expect(page).toHaveURL('/diary?page=1')
    await expect(page.getByText('Daily reports')).toBeVisible()
  })
})
