import { expect, type Page, type Locator, errors  } from "@playwright/test"

export class MainPage 

{ 
  readonly page: Page
  readonly signInBtn: Locator
  readonly signOutBtn: Locator
  readonly OverviewBtn: Locator
  readonly DownloadBtn: Locator
  readonly ActivityBtn: Locator 
  readonly RoadmapBtn: Locator 
  readonly IssuesBtn: Locator
  readonly NewsBtn: Locator
  readonly WikiBtn: Locator 
  readonly ForumsBtn: Locator 
  readonly RepositoryBtn: Locator 
  readonly HomeBtn: Locator
  readonly ProjectsBtn: Locator
  readonly HelpBtn: Locator
  readonly AdCloseBtn: Locator
  

  constructor(page: Page) { 
    this.page = page
    this.signInBtn = this.page.locator('a', { hasText: 'Sign in' })
    this.signOutBtn = this.page.locator('a', { hasText: 'Sign out' })
    this.OverviewBtn = this.page.locator('a.overview')
    this.DownloadBtn = this.page.locator('a.download')
    this.ActivityBtn = this.page.locator('a.activity')
    this.RoadmapBtn = this.page.locator('a.roadmap')
    this.IssuesBtn = this.page.locator('a.issues')
    this.NewsBtn = this.page.locator('a.news')
    this.WikiBtn = this.page.locator('a.wiki')
    this.ForumsBtn = this.page.locator('a.boards')
    this.RepositoryBtn = this.page.locator('a.repository')
    this.HomeBtn = this.page.locator('a.home')
    this.HelpBtn = this.page.locator('a.help')
    this.ProjectsBtn = this.page.locator('a.projects')
    this.AdCloseBtn = this.page.frameLocator('#aswift_2').frameLocator('#ad_iframe').locator('#dismiss-button[aria-label="Close ad"]')
  }

  //Actions
  async maingoto() { 
    await this.page.goto('https://www.redmine.org')
  }

  async clickSignInBtn() {  
    await this.signInBtn.click()
  }

  async clickSignOutBtn() {
    await this.signOutBtn.click()
  }

  async signInConf() {
    await expect(this.signOutBtn).toBeVisible()
  }

  async signOutConf() {
    await expect(this.signOutBtn).toBeVisible() 
  }

  async overviewBtnConf() { 
    await this.OverviewBtn.click()
    await this.closeAdIfVisible()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine')
  }

  async downloadBtnConf() { 
    await this.DownloadBtn.click()
    await this.closeAdIfVisible()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download')
  }

  async activityBtnConf() { 
    await this.ActivityBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/activity')
  }

  async roadmapBtnConf() { 
    await this.RoadmapBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/roadmap')
  }

  async issuesBtnConf() { 
    await this.IssuesBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/issues')
  }

  async newsBtnConf() { 
    await this.NewsBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/news')
  }

  async wikiBtnConf() { 
    await this.WikiBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/wiki')
  }

  async forumsBtnConf() { 
    await this.ForumsBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/boards')
  }

  async repositoryBtnConf() { 
    await this.RepositoryBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects/redmine/repository')
  }

  async homeBtnConf() {
    await this.HomeBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/')
  }

  async helpBtnConf() {
    await this.HelpBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/guide')
  }

  async projectsBtnConf() {
    await this.ProjectsBtn.click()
    await expect(this.page).toHaveURL('https://www.redmine.org/projects')
  }

  async closeAdIfVisible() {
    if (await this.softWaitFor(this.AdCloseBtn, {state: "visible"}))
    {
      await this.AdCloseBtn.click()
    }
  }

  async softWaitFor(
    locator: Locator,
    options: { state: "attached" | "detached" | "visible" | "hidden"; timeout?: number }
  ) 
  {
    if (!options.timeout) options.timeout = 5000;
    try {
        await locator.waitFor(options);
        return true;
    } catch (error) {
        if (error instanceof errors.TimeoutError) console.log(`Soft ${error}`);
        return false;
    }
  }
}