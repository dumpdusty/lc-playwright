import { test, expect } from '../common/test'
import { loginWithApi} from '../common/login-with-qpi'

test.describe('Navigation', () => {

  test.beforeEach(async({page, request, context}) => {
    // await loginPage.open()
    // await loginPage.login(process.env.EMAIL, process.env.PASSWORD)
    await loginWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
  })

  // all navbar links in one test
  test.only('navbar all-in-one', async ({page, loginPage}) => {
    await loginPage.navbar.courses.click()
    await expect(page).toHaveURL('/course')
    await expect(
      page.getByText('Курсы программирования и тестирования')
    ).toBeVisible()

    await loginPage.navbar.tasks.click()
    await expect(page).toHaveURL('/challenge?limit=30&page=1')
    await expect(page.getByText('Кодинг задачи')).toBeVisible()

    await loginPage.navbar.interview.click()
    await expect(page).toHaveURL('/flash')
    await expect(page.getByText('Interview practice cards')).toBeVisible()

    await loginPage.navbar.diary.click()
    await expect(page).toHaveURL('/diary?page=1')
    await expect(page.getByText('Daily reports')).toBeVisible()
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
