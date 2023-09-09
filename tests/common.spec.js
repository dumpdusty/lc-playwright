import { test, expect } from "@playwright/test";
import { logIn } from "../common/login";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await logIn(page, process.env.EMAIL, process.env.PASSWORD);
  });
  test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  });

  test("verify Courses link", async ({ page }) => {
    await page.getByTestId("topmenu-Курсы").click();
    await expect(page).toHaveURL("/course");
    await expect(
      page.getByText("Курсы программирования и тестирования"),
    ).toBeVisible();
  });

  test("verify Tasks link", async ({ page }) => {
    await page.getByTestId("topmenu-Задачи").click();
    await expect(page).toHaveURL("/challenge?limit=30&page=1");
    await expect(page.getByText("Кодинг задачи")).toBeVisible();
  });

  test("verify Interview link", async ({ page }) => {
    await page.getByTestId("topmenu-Интервью").click();
    await expect(page).toHaveURL("/flash");
    await expect(page.getByText("Interview practice cards")).toBeVisible();
  });

  test("verify Diary link", async ({ page }) => {
    await page.getByTestId("topmenu-Дневник").click();
    await expect(page).toHaveURL("/diary?page=1");
    await expect(page.getByText("Daily reports")).toBeVisible();
  });
});
