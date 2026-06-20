import { Page, Locator } from '@playwright/test';

export class PIMPage {

    readonly page: Page;

    readonly pimMenu: Locator;
    readonly addEmployeeButton: Locator;

    readonly firstName: Locator;
    readonly lastName: Locator;

    readonly saveButton: Locator;

    readonly employeeNameSearch: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.pimMenu = page.locator('//span[text()="PIM"]');

        this.addEmployeeButton = page.locator(
            '//button[normalize-space()="Add"]'
        );

        this.firstName = page.locator(
            'input[name="firstName"]'
        );

        this.lastName = page.locator(
            'input[name="lastName"]'
        );

        this.saveButton = page.getByRole(
             'button',
             { name: 'Save' }

        );

        this.employeeNameSearch = page.locator(
            '(//input[@placeholder="Type for hints..."])[1]'
        );

        this.searchButton = page.locator(
            '//button[normalize-space()="Search"]'
        );
    }

    async navigateToPIM() {

        await this.pimMenu.click();

    }

    async clickAddEmployee() {

        await this.addEmployeeButton.click();

    }

async createEmployee(
    firstName: string,
    lastName: string
) {

    await this.firstName.fill(firstName);

    await this.lastName.fill(lastName);

    console.log('First Name:', await this.firstName.inputValue());
    console.log('Last Name:', await this.lastName.inputValue());

    await this.page.screenshot({
        path: 'screenshots/before-save.png'
    });

    await this.saveButton.click();

    await this.page.waitForTimeout(5000);

    console.log(
        'Current URL After Save:',
        this.page.url()
    );

}

    async searchEmployee(
        employeeName: string
    ) {

        await this.employeeNameSearch.fill(
            employeeName
        );

        await this.searchButton.click();

    }

}