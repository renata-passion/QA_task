import { test } from '@playwright/test';
import { buttons, categories, templates, error } from '../data';
import * as selectTemplate from  "../page-objects/createYourApp/selectTemplatePage"
import * as chooseAppName from  "../page-objects/createYourApp/chooseAppNamePage"

test.describe("App creator tests", () => {

});
test('Assert application name is already taken', async ({ page }) => {
  const selectTemplatePage = new selectTemplate.SelectTemplatePage(page);
  const chooseAppNamePage = new chooseAppName.ChooseAppNamePage(page);

  //Test
  await selectTemplatePage.visit();
  await selectTemplatePage.assertPageVisited();
  await selectTemplatePage.selectOption(selectTemplate.categorySelection, categories.education);
  await selectTemplatePage.clickTemplate(templates.blue);
  await selectTemplatePage.clickBlueButton(buttons.next_step);
  await chooseAppNamePage.assertPageVisited();
  await chooseAppNamePage.fill(chooseAppName.appNameField, "Facebook");
  await chooseAppNamePage.clickGreenButton(buttons.check_availability);

  //Assertion
  await chooseAppNamePage.assertErrorDisplayed(error.name_taken);
  await chooseAppNamePage.assertErrorDisplayed(error.using_desired_name);
});