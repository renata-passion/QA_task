import { expect } from "@playwright/test";
import { Page } from "playwright-core";

const pageHeading = '//p[contains(@class, "AxgMl") and @type="m"]';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    //Actions

    async visitPage(urlPath: string): Promise<void> {
        await this.page.goto(process.env.HOST_URL + urlPath);
    };

    async selectOption(selector: string, value: string): Promise<void> {
        await this.page.selectOption(selector, {label: value});
    };

    async clickBlueButton(buttonTitle: string): Promise<void> {
        await this.page.click('//a[contains(@class, "sc-fzoyTs") and contains(text(), "' +buttonTitle+'")]')
    };

    async clickGreenButton(buttonTitle: string): Promise<void> {
        await this.page.click('//button[contains(@class, "sc-fzoyTs") and contains(text(), "' +buttonTitle+'")]')
    };

    async fill(selector: string, value: string): Promise<void> {
        await this.page.fill(selector, value);
    };

    //Assertions

    async assertStepColorRed(stepTitle: string): Promise<void> {
        const stepLink = this.page.waitForSelector('//p[contains(text(), "' +stepTitle+'")]');
        const color = await (await stepLink).evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('color');
     });
     expect(color).toEqual("rgb(210, 59, 92)");
    };

    async assertHeadingTextEquals(headingTitle: string): Promise<void> {
        const headingText = await this.page.textContent(pageHeading);
        expect(headingText).toContain(headingTitle);
    };

    async assertTextDisplayed(selector: string, text: string): Promise<void> {
        const elementText = await this.page.textContent(selector);
        expect(elementText).toContain(text);
    }
};
