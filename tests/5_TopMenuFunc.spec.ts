import { test, expect } from "@playwright/test";
import { MainPage } from "./pages/main.page";
import endpoints from "../tests/consts/endpoints.json";

test("Top menu buttons fucntionality", async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.goto();
  await test.step("Click on 'Home' button. Confirm that user is redirected to Home page", async () => {
    await mainpage.HomeBtn.click();
    await expect(mainpage.page).toHaveURL("https://www.redmine.org/");
  });

  await test.step("Click on 'Help' button. Confirm that user is redirected to Help page", async () => {
    await mainpage.HelpBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.help));
  });

  await test.step("Click on 'Projects' button. Confirm that user is redirected to Projects page", async () => {
    await mainpage.ProjectsBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.projects));
  });
});
