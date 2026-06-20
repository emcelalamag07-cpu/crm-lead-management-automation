import { Page, Locator } from '@playwright/test';

export class PIMPage {

    readonly page: Page;

    readonly pimMenu: Locator;
    readonly addEmployeeButton: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;

    readonly saveButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.pimMenu = page.locator('//span[text()="PIM"]');

        this.addEmployeeButton = page.locator(
            '//button[normalize-space()="Add"]'
        );

        this.firstName = page.locator('input[name="firstName"]');

        this.lastName = page.locator('input[name="lastName"]');

        this.saveButton = page.locator(
            '//button[@type="submit"]'
        );
    }

    async navigateToPIM() {
        await this.pimMenu.click();
    }

    async clickAddEmployee() {
        await this.addEmployeeButton.click();
    }

    async createEmployee(firstName: string, lastName: string) {

        await this.firstName.fill(firstName);

        await this.lastName.fill(lastName);

        await this.saveButton.click();
    }
}