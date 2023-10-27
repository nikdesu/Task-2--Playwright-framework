import { test, expect } from "@playwright/test";
import { MainPage } from "./pages/main.page";
import { SignInPage } from "./pages/signin.page";
import { faker } from "@faker-js/faker";

test("Sign in with invalid creds", async ({ page }) => {
  const mainpage = new MainPage(page);
  const signinpage = new SignInPage(page);

  await mainpage.goto();

  await test.step("Click on 'Sign in' button", async () => {
    await mainpage.signInBtn.click();
  });

  await test.step("Type in invalid credentials", async () => {
    await signinpage.fillLoginForm(faker.internet.userName(), faker.internet.password());
  });

  await test.step("Click on 'Login' button", async () => {
    await signinpage.logInBtn.click();
  });

  await test.step("Confirm that error is shown", async () => {
    await expect(signinpage.invalidCredsErr).toBeVisible();
  });
});
