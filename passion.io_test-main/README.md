## Prerequisites


- Node.js
- npm

---

## Project setup


Go to project root and:
- run "npm install"
- run "npx playwright install"
---

## Configuration
- Playwright configuration is defined in "playwright.config.ts" and "global-setup.ts". Ususally files are included in ".gitignore", but for presentation purposes I leave it tracked by git. 
- npm dependencies are defined in "package.json". Ususally it is included in ".gitignore", but for presentation purposes I leave it tracked by git. 
- Environment specific and sensitive data is defined in ".env". Ususally it is included in ".gitignore", but for presentation purposes I leave it tracked by git.
---

## Test run
- Headed: npx "playwright test --headed"
- Hedless: "npx playwright test"
- With HTML reporter (see Test Report section): "npx playwright test --reporter=html" 

---

## Test report 
Running command "npx playwright test" in terminal will produce a basic test report which will show whether test is passed or failed.

 For more advanced and detailed solution do the following:
- Run command "npx node-static playwright-report" it will install node-static package and start serving "playwright-report" at host http://127.0.0.1:8080. Do not close it!
- Run tests using command "npx playwright test --reporter=html". It will create folder "playwright-report" test report data.
- Open http://127.0.0.1:8080 to view more detailed and visually represented test report. 

![Alt text](reporter.JPG?raw=true "Title")

---

## Test results
If test fails, screenshot is automatically captured and placed in folder "test-results".