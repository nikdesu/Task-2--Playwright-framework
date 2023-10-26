import { expect, Locator, Page  } from "@playwright/test"

export class SignInPage 
{ 
  readonly page: Page
  readonly loginTextbox: Locator
  readonly passTextbox: Locator
  readonly logInBtn: Locator
  readonly invalidCredsErr: Locator

  constructor(page: Page) { 
    this.page = page
    this.loginTextbox = page.locator("#username")
    this.passTextbox = page.locator("#password")
    this.logInBtn = page.locator("#login-submit")
    this.invalidCredsErr = page.locator("#flash_error")
  }

  //Actions
  async enterCredDet() {
    await this.loginTextbox.fill("test_case123")
    await this.passTextbox.fill("test1234")
  }

  async enterINVCredDet() {
    await this.loginTextbox.fill("invalid@пошта.ком")
    await this.passTextbox.fill("invalidпароль123")
  }

  async clickSignInBtn() {  
    await this.logInBtn.click()
  }

  async invalidCredsConf() {
    await expect(this.invalidCredsErr).toBeVisible()
  }
}