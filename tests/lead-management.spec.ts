import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

import { loginData } from '../test-data/loginData';
import { employeeData } from '../test-data/employeeData';
import { takeEvidence } from '../utils/screenshotHelper';

test.describe('Lead Management Module', () => {

    test('TC-009 Create Lead with Valid Data', async ({ page }) => {

        const login = new LoginPage(page);

        const pim = new PIMPage(page);

        await login.goto();

        await login.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await pim.navigateToPIM();

        await pim.clickAddEmployee();

      await pim.createEmployee(
    employeeData.validEmployee.firstName,
    employeeData.validEmployee.lastName
);

await page.waitForURL(
    /viewPersonalDetails/,
    { timeout: 20000 }
);

await expect(page)
    .toHaveURL(/viewPersonalDetails/);

await takeEvidence(
    page,
    'TC-009',
    'CreateLeadWithValidData',
    'PASS'
);

});

});

test('TC-010 Create Lead with Blank First Name', async ({ page }) => {

    const login = new LoginPage(page);
    const pim = new PIMPage(page);

    await login.goto();

    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await pim.navigateToPIM();

    await pim.clickAddEmployee();

    await pim.createEmployee(
        employeeData.blankFirstName.firstName,
        employeeData.blankFirstName.lastName
    );

    await expect(
        pim.requiredFieldValidation
    ).toBeVisible();

    await takeEvidence(
        page,
        'TC-010',
        'BlankFirstName',
        'PASS'
    );

});

test('TC-011 Create Lead with Blank Last Name', async ({ page }) => {

    const login = new LoginPage(page);
    const pim = new PIMPage(page);

    await login.goto();

    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await pim.navigateToPIM();

    await pim.clickAddEmployee();

console.log(
    'Required Count:',
    await page.getByText('Required').count()
);

    await pim.createEmployee(
        employeeData.blankLastName.firstName,
        employeeData.blankLastName.lastName
    );

   await expect(
    page.getByText('Required').first()
).toBeVisible();

    await takeEvidence(
        page,
        'TC-011',
        'BlankLastName',
        'PASS'
    );

});

test('TC-012 Search Existing Employee', async ({ page }) => {

    const login = new LoginPage(page);
    const pim = new PIMPage(page);

    await login.goto();

    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await pim.navigateToPIM();

    await pim.searchEmployee(
        employeeData.searchEmployee.employeeName
    );

    await expect(
        page.getByText('Mouse').first()
    ).toBeVisible();

    await takeEvidence(
        page,
        'TC-012',
        'SearchExistingEmployee',
        'PASS'
    );

});

test('TC-013 Search Non-Existing Employee', async ({ page }) => {

    const login = new LoginPage(page);
    const pim = new PIMPage(page);

    await login.goto();

    await login.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await pim.navigateToPIM();

    await pim.searchEmployee(
        employeeData.nonExistingEmployee.employeeName
    );

    await expect(
    page.getByText('No Records Found').first()
).toBeVisible();

    await takeEvidence(
        page,
        'TC-013',
        'SearchNonExistingEmployee',
        'PASS'
    );

});