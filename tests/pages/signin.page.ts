import { expect, Locator, Page  } from "@playwright/test"
import credentials from "../../credentials.json"
import { faker } from '@faker-js/faker'

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
    await this.loginTextbox.fill(credentials.username)
    await this.passTextbox.fill(credentials.password)
  }

  async enterINVCredDet() {
    await this.loginTextbox.fill(faker.internet.email())
    await this.passTextbox.fill(faker.internet.password())
  }
}