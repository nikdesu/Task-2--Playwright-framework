import { test, expect } from "@playwright/test";
import { MainPage } from "./pages/main.page";
import { SignInPage } from "./pages/signin.page";
import valid_credentials from "../tests/consts/valid_credentials.json";

test("Sign in with valid creds", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();

  await test.step("Click on 'Sign in' button", async () => {
    await mainpage.signInBtn.click();
  });

  await test.step("Type in valid credentials", async () => {
    await signinpage.fillLoginForm(valid_credentials.username, valid_credentials.password);
  });

  await test.step("Click on 'Login' button", async () => {
    await signinpage.logInBtn.click();
  });

  await test.step("Confirm that 'Logged in as username' is visible", async () => {
    await expect(mainpage.LoggedInAs).toBeVisible();
  });
});
