import { headings, titles } from "../../data";
import { BasePage } from "../basePage";

export const appNameField = '//input[@name="appName"]';
const errorBox = '//div[contains(@class, "sc-fzqPZZ")]';

export class ChooseAppNamePage extends BasePage {

    async assertPageVisited(): Promise<void> {
        await this.assertStepColorRed(titles.choose_app_name);
        await this.assertHeadingTextEquals(headings.choose_app_name);
    };

    async assertErrorDisplayed(text: string): Promise<void> {
        await this.assertTextDisplayed(errorBox, text);
    };
};