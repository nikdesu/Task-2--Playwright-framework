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
    this.signInBtn = this.page.locator('a.login')
    this.signOutBtn = this.page.locator('a.logout')
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
  async goto() { 
    await this.page.goto('https://www.redmine.org')
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