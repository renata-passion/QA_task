import { headings, titles } from "../../data";
import { BasePage } from "../basePage";

export const categorySelection = '//select[@name="category"]';
const urlPath = '/qa-build-an-app/lookAndFeel';

export class SelectTemplatePage extends BasePage{
    async visit(): Promise<void> {
        await this.visitPage(urlPath);
    };

    async assertPageVisited(): Promise<void> {
        await this.assertStepColorRed(titles.select_template);
        await this.assertHeadingTextEquals(headings.what_app_about);
    };

    async clickTemplate(templateTitle: string): Promise<void> {
        await this.page.click('//div[contains(@class, "sc-fzoCUK")][p[text()="' +templateTitle+ '"]]');
    };
};