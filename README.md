# Task 2 Playwright framework

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running-test">Running test</a></li>
    <li><a href="#writing-tests">Writing tests</a></li>
    <li><a href="#test-reports">Test reports</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About the project
This repository contains a test suite for a web application, written using Playwright and TypeScript. Playwright is a powerful and versatile automation tool for end-to-end testing of web applications, and TypeScript enhances code quality and provides static type checking.

<!-- GETTING STARTED -->
## Getting started
### Prerequisites

Before running the tests, make sure you have the following dependencies installed:

Node.js: Install Node.js from https://nodejs.org/en

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/nikdesu/Task-2--Playwright-framework
   ```
2. Navigate to the project directory:
   ```bash
   cd playwright-typescript-tests
   ```
3. Installing Playwright
   ```bash
   npm init playwright@latest
   ```
4. Install the project dependencies:
   ```bash
   npm install
   ```
<!-- USAGE EXAMPLES -->
## Running test

To run the test suite, execute the following command:

```bash
npm run run-all-tests
```

<!-- WRITING TESTS -->
## Writing tests 
You can start writing your own tests in the tests directory. Follow the Playwright API documentation to interact with your web application. Ensure that your test files are written in TypeScript (.ts extension) and located in the tests directory.

<!-- TEST REPORTS -->
## Test reports 
The HTML Reporter shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. By default, the HTML report is opened automatically if some of the tests failed, otherwise you can open it with the following command.

```bash
npx playwright show-report
```
