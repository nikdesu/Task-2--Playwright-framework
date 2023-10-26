import { test, expect } from "@playwright/test";
import { MainPage } from "./pages/main.page";
import { SignInPage } from "./pages/signin.page";

test("Sign in with valid creds", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();
  await test.step("Click on 'Sign in' button", async () => {
    await mainpage.signInBtn.click();
  });
  await test.step("Type in valid credentials", async () => {
    await signinpage.enterCredDet();
  });
  await test.step("Click on 'Login' button", async () => {
    await signinpage.logInBtn.click();
  });
  await test.step("Confirm that 'Logged in as username' is visible", async () => {
    await expect(mainpage.LoggedInAs).toBeVisible();
  });
});

test("Sign in with invalid creds", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();
  await test.step("Click on 'Sign in' button", async () => {
    await mainpage.signInBtn.click();
  });
  await test.step("Type in invalid credentials", async () => {
    await signinpage.enterINVCredDet();
  });
  await test.step("Click on 'Login' button", async () => {
    await signinpage.logInBtn.click();
  });
  await test.step("Confirm that error is shown", async () => {
    await expect(signinpage.invalidCredsErr).toBeVisible();
  });
});

test("Sign out feature", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();
  await test.step("Click on 'Sign in' button", async () => {
    await mainpage.signInBtn.click();
  });
  await test.step("Type in valid credentials", async () => {
    await signinpage.enterCredDet();
  });
  await test.step("Click on 'Login' button", async () => {
    await signinpage.logInBtn.click();
  });
  await test.step("Click on 'Sign out' button", async () => {
    await mainpage.signOutBtn.click();
  });
  await test.step("Confirm that 'Sign in' button is visible", async () => {
    await expect(mainpage.signInBtn).toBeVisible();
  });
});

test("Main menu functionality", async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.goto();
  await test.step("Click on 'Overview' button. Confirm that user is redirected to Overview page", async () => {
    await mainpage.OverviewBtn.click();
    await mainpage.closeAdIfVisible();
    await expect(mainpage.page).toHaveURL(/redmine/);
  });
  await test.step("Click on 'Download' button. Confirm that user is redirected to Download page", async () => {
    await mainpage.DownloadBtn.click();
    await mainpage.closeAdIfVisible();
    await expect(mainpage.page).toHaveURL(/Download/);
  });
  await test.step("Click on 'Activity' button. Confirm that user is redirected to Activity page", async () => {
    await mainpage.ActivityBtn.click();
    await expect(mainpage.page).toHaveURL(/activity/);
  });
  await test.step("Click on 'Roadmap' button. Confirm that user is redirected to Roadmap page", async () => {
    await mainpage.RoadmapBtn.click();
    await expect(mainpage.page).toHaveURL(/roadmap/);
  });
  await test.step("Click on 'Issues' button. Confirm that user is redirected to Issues page", async () => {
    await mainpage.IssuesBtn.click();
    await expect(mainpage.page).toHaveURL(/issues/);
  });
  await test.step("Click on 'News' button. Confirm that user is redirected to News page", async () => {
    await mainpage.NewsBtn.click();
    await expect(mainpage.page).toHaveURL(/news/);
  });
  await test.step("Click on 'Wiki' button. Confirm that user is redirected to Wiki page", async () => {
    await mainpage.WikiBtn.click();
    await expect(mainpage.page).toHaveURL(/wiki/);
  });
  await test.step("Click on 'Forums' button. Confirm that user is redirected to Forums page", async () => {
    await mainpage.ForumsBtn.click();
    await expect(mainpage.page).toHaveURL(/boards/);
  });
  await test.step("Click on 'Repository' button. Confirm that user is redirected to Repository page", async () => {
    await mainpage.RepositoryBtn.click();
    await expect(mainpage.page).toHaveURL(/repository/);
  });
});

test("Top menu buttons fucntionality", async ({ page }) => {
  const mainpage = new MainPage(page);

  await mainpage.goto();
  await test.step("Click on 'Home' button. Confirm that user is redirected to Home page", async () => {
    await mainpage.HomeBtn.click();
    await expect(mainpage.page).toHaveURL("https://www.redmine.org/");
  });
  await test.step("Click on 'Help' button. Confirm that user is redirected to Help page", async () => {
    await mainpage.HelpBtn.click();
    await expect(mainpage.page).toHaveURL(/guide/);
  });
  await test.step("Click on 'Projects' button. Confirm that user is redirected to Projects page", async () => {
    await mainpage.ProjectsBtn.click();
    await expect(mainpage.page).toHaveURL(/projects/);
  });
});
