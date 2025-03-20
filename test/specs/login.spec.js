import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Native app demo application\'s login tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('1. Login with valid credentials', async () => {
        await LoginPage.login('test@test.com', 'testtest')
        await expect(await LoginPage.getSuccessPopUp()).toBeExisting();
        await expect(await LoginPage.getSuccessPopUpTitle()).toHaveText('Success');
        await expect(await LoginPage.getSuccessPopUpText()).toHaveText('You are logged in!');
        await LoginPage.closeSuccessPopUp();
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
    });

    it('2. Login with invalid email', async () => {
        await LoginPage.login('test@testcom', 'testtest')
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getEmailFieldError()).toHaveText('Please enter a valid email address');
    });

    it('3. Login with invalid password', async () => {
        await LoginPage.login('test@test.com', 'testtes')
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getPasswordFieldError()).toHaveText('Please enter at least 8 characters');
    });

    it('4. Login with empty fields', async () => {
        await LoginPage.login('', '')
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getEmailFieldError()).toHaveText('Please enter a valid email address');
        await expect(await LoginPage.getPasswordFieldError()).toHaveText('Please enter at least 8 characters');
    });
});