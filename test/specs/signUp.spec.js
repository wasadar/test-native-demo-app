import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Native app demo application\'s login tests', () => {
    beforeEach(async () => {
        await LoginPage.open();

        await LoginPage.openSignUpSubTab()
    });

    it('5. Sign up with valid credentials', async () => {
        await LoginPage.signUp('test@test.com', 'testtest', 'testtest');
        await expect(await LoginPage.getSuccessPopUp()).toBeExisting();
        await expect(await LoginPage.getSuccessPopUpTitle()).toHaveText('Signed Up!');
        await expect(await LoginPage.getSuccessPopUpText()).toHaveText('You successfully signed up!');
        await LoginPage.closeSuccessPopUp();
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
    });

    it('6. Sign up with invalid email', async () => {
        await LoginPage.signUp('test@testcom', 'testtest', 'testtest');
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getEmailFieldError()).toHaveText('Please enter a valid email address');
    });

    it('7. Sign up with invalid password', async () => {
        await LoginPage.signUp('test@test.com', 'testtes', 'testtes')
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getPasswordFieldError()).toHaveText('Please enter at least 8 characters');
        await expect(await LoginPage.getPasswordConfirmFieldError()).toHaveText('Please enter the same password');
    });

    it('8. Sign up with invalid password confirmation', async () => {
        await LoginPage.signUp('test@test.com', 'testtest', 'testtesq');
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getPasswordConfirmFieldError()).toHaveText('Please enter the same password');
    });

    it('9. Sign up with empty fields', async () => {
        await LoginPage.signUp('', '', '');
        await expect(await LoginPage.getSuccessPopUp()).not.toBeExisting();
        await expect(await LoginPage.getEmailFieldError()).toHaveText('Please enter a valid email address');
        await expect(await LoginPage.getPasswordFieldError()).toHaveText('Please enter at least 8 characters');
        await expect(await LoginPage.getPasswordConfirmFieldError()).toHaveText('Please enter the same password');
    });
});