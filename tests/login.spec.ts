import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test.describe('Authentication Module', () => {

    test('TC-001 Login with valid credentials', async ({ page }) => {

        const login = new LoginPage(page);

        await login.goto();

        await login.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await expect(page).toHaveURL(/dashboard/);

    });

    test('TC-003 Login with invalid password', async ({ page }) => {

        const login = new LoginPage(page);

        await login.goto();

        await login.login(
            loginData.invalidPassword.username,
            loginData.invalidPassword.password
        );

        await expect(login.errorMessage)
            .toContainText('Invalid credentials');

    });

    test('TC-004 Login with invalid username', async ({ page }) => {

        const login = new LoginPage(page);

        await login.goto();

        await login.login(
            loginData.invalidUsername.username,
            loginData.invalidUsername.password
        );

        await expect(login.errorMessage)
            .toContainText('Invalid credentials');

    });

    test('TC-005 Login with blank username', async ({ page }) => {

        const login = new LoginPage(page);

        await login.goto();

        await login.login(
            '',
            'admin123'
        );

        await expect(page)
            .toHaveURL(/login/);

    });

    test('TC-006 Login with blank password', async ({ page }) => {

        const login = new LoginPage(page);

        await login.goto();

        await login.login(
            'Admin',
            ''
        );

        await expect(page)
            .toHaveURL(/login/);

    });

});