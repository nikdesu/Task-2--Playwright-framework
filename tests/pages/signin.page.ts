import { Locator, Page } from "@playwright/test";

export class SignInPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly logInBtn: Locator;
  readonly invalidCredsErr: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.logInBtn = page.locator("#login-submit");
    this.invalidCredsErr = page.locator("#flash_error");
  }

  async fillLoginForm(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }
}
