import { test } from '@playwright/test'
import { MainPage }   from './pages/main.page'
import { SignInPage } from './pages/signin.page'

test('Sign in with valid creds', async ({ page }) => {
  const mainpage = new MainPage (page)
  const signinpage = new SignInPage (page) 

  await mainpage.maingoto()
  await mainpage.clickSignInBtn()
  await signinpage.enterCredDet()
  await signinpage.clickSignInBtn()
  await mainpage.signInConf()
});

test('Sign in with invalid creds', async ({ page }) => {
  const mainpage = new MainPage (page)
  const signinpage = new SignInPage (page) 

  await mainpage.maingoto()
  await mainpage.clickSignInBtn()
  await signinpage.enterINVCredDet()
  await signinpage.clickSignInBtn()
  await signinpage.invalidCredsConf()
})

test('Sign out feature', async ({ page }) => {
  const mainpage = new MainPage (page)
  const signinpage = new SignInPage (page) 

  await mainpage.maingoto()
  await mainpage.clickSignInBtn()
  await signinpage.enterINVCredDet()
  await signinpage.clickSignInBtn()
  await signinpage.invalidCredsConf()
})

test('Main menu functionality', async ({page}) => {
  const mainpage = new MainPage (page)

  await mainpage.maingoto()
  await mainpage.overviewBtnConf()
  await mainpage.downloadBtnConf()
  await mainpage.activityBtnConf()
  await mainpage.roadmapBtnConf()
  await mainpage.issuesBtnConf()
  await mainpage.newsBtnConf()
  await mainpage.wikiBtnConf()
  await mainpage.forumsBtnConf()
  await mainpage.repositoryBtnConf()
})

test('Top menu buttons fucntionality', async ({page}) => {
  const mainpage = new MainPage (page)

  await mainpage.maingoto()
  await mainpage.homeBtnConf()
  await mainpage.helpBtnConf()
  await mainpage.projectsBtnConf()
})