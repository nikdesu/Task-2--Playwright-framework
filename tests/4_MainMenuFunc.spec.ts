import { test, expect } from "@playwright/test";
import { MainPage } from "./pages/main.page";
import endpoints from "../tests/consts/endpoints.json";

test("Main menu functionality", async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.goto();

  await test.step("Click on 'Overview' button. Confirm that user is redirected to Overview page", async () => {
    await mainpage.OverviewBtn.click();
    await mainpage.closeAdIfVisible();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.overview));
  });

  await test.step("Click on 'Download' button. Confirm that user is redirected to Download page", async () => {
    await mainpage.DownloadBtn.click();
    await mainpage.closeAdIfVisible();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.download));
  });

  await test.step("Click on 'Activity' button. Confirm that user is redirected to Activity page", async () => {
    await mainpage.ActivityBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.activity));
  });

  await test.step("Click on 'Roadmap' button. Confirm that user is redirected to Roadmap page", async () => {
    await mainpage.RoadmapBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.roadmap));
  });

  await test.step("Click on 'Issues' button. Confirm that user is redirected to Issues page", async () => {
    await mainpage.IssuesBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.issues));
  });

  await test.step("Click on 'News' button. Confirm that user is redirected to News page", async () => {
    await mainpage.NewsBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.news));
  });

  await test.step("Click on 'Wiki' button. Confirm that user is redirected to Wiki page", async () => {
    await mainpage.WikiBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.wiki));
  });

  await test.step("Click on 'Forums' button. Confirm that user is redirected to Forums page", async () => {
    await mainpage.ForumsBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.forums));
  });

  await test.step("Click on 'Repository' button. Confirm that user is redirected to Repository page", async () => {
    await mainpage.RepositoryBtn.click();
    await expect(mainpage.page).toHaveURL(RegExp(endpoints.repository));
  });
});
