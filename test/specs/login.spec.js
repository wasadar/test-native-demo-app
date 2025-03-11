import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('Native app demo application\'s login tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('1. Login with valid credentials', async () => {
        await LoginPage.login('test@test.com', 'testtest')
        await expect(LoginPage.successPopUp).toBeExisting();
        await expect(LoginPage.successPopUpTitle).toHaveText('Success');
        await expect(LoginPage.successPopUpText).toHaveText('You are logged in!');
        await LoginPage.closeSuccessPopUp();
        await expect(LoginPage.successPopUp).not.toBeExisting();
    });

    it('2. Login with invalid email', async () => {
        await LoginPage.login('test@testcom', 'testtest')
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.emailFieldError).toHaveText('Please enter a valid email address');
    });

    it('3. Login with invalid password', async () => {
        await LoginPage.login('test@test.com', 'testtes')
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.passwordFieldError).toHaveText('Please enter at least 8 characters');
    });

    it('4. Login with empty fields', async () => {
        await LoginPage.login('', '')
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.emailFieldError).toHaveText('Please enter a valid email address');
        await expect(LoginPage.passwordFieldError).toHaveText('Please enter at least 8 characters');
    });
});