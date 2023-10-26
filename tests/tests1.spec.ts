import { test, expect } from "@playwright/test";
import { MainPage } from "./pages/main.page";
import { SignInPage } from "./pages/signin.page";

test("Sign in with valid creds", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();
  await mainpage.signInBtn.click();
  await signinpage.enterCredDet();
  await signinpage.logInBtn.click();
  await expect(mainpage.signOutBtn).toBeVisible();
});

test("Sign in with invalid creds", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();
  await mainpage.signInBtn.click();
  await signinpage.enterINVCredDet();
  await signinpage.logInBtn.click();
  await expect(signinpage.invalidCredsErr).toBeVisible();
});

test("Sign out feature", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();
  await mainpage.signInBtn.click();
  await signinpage.enterCredDet();
  await signinpage.logInBtn.click();
  await mainpage.signOutBtn.click();
  await expect(mainpage.signInBtn).toBeVisible();
});

test("Main menu functionality", async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.goto();
  await mainpage.OverviewBtn.click();
  await mainpage.closeAdIfVisible();
  await expect(mainpage.page).toHaveURL(/redmine/);
  await mainpage.DownloadBtn.click();
  await mainpage.closeAdIfVisible();
  await expect(mainpage.page).toHaveURL(/Download/);
  await mainpage.ActivityBtn.click();
  await expect(mainpage.page).toHaveURL(/activity/);
  await mainpage.RoadmapBtn.click();
  await expect(mainpage.page).toHaveURL(/roadmap/);
  await mainpage.IssuesBtn.click();
  await expect(mainpage.page).toHaveURL(/issues/);
  await mainpage.NewsBtn.click();
  await expect(mainpage.page).toHaveURL(/news/);
  await mainpage.WikiBtn.click();
  await expect(mainpage.page).toHaveURL(/wiki/);
  await mainpage.ForumsBtn.click();
  await expect(mainpage.page).toHaveURL(/boards/);
  await mainpage.RepositoryBtn.click();
  await expect(mainpage.page).toHaveURL(/repository/);
});

test("Top menu buttons fucntionality", async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.goto();
  await mainpage.HomeBtn.click();
  await expect(mainpage.page).toHaveURL("https://www.redmine.org/");
  await mainpage.HelpBtn.click();
  await expect(mainpage.page).toHaveURL(/guide/);
  await mainpage.ProjectsBtn.click();
  await expect(mainpage.page).toHaveURL(/projects/);
});