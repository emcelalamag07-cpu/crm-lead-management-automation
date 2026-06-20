import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';

import { loginData } from '../test-data/loginData';
import { employeeData } from '../test-data/employeeData';

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

        await expect(page.url())
    .toContain('viewPersonalDetails');

    });

});