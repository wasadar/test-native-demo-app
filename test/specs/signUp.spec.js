import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Native app demo application\'s login tests', () => {
    beforeEach(async () => {
        await LoginPage.open();

        await LoginPage.openSignUpSubTab()
    });

    it('5. Sign up with valid credentials', async () => {
        await LoginPage.signUp('test@test.com', 'testtest', 'testtest');
        await expect(LoginPage.successPopUp).toBeExisting();
        await expect(LoginPage.successPopUpTitle).toHaveText('Signed Up!');
        await expect(LoginPage.successPopUpText).toHaveText('You successfully signed up!');
        await LoginPage.closeSuccessPopUp();
        await expect(LoginPage.successPopUp).not.toBeExisting();
    });

    it('6. Sign up with invalid email', async () => {
        await LoginPage.signUp('test@testcom', 'testtest', 'testtest');
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.emailFieldError).toHaveText('Please enter a valid email address');
    });

    it('7. Sign up with invalid password', async () => {
        await LoginPage.signUp('test@test.com', 'testtes', 'testtes')
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.passwordFieldError).toHaveText('Please enter at least 8 characters');
        await expect(LoginPage.passwordConfirmFieldError).toHaveText('Please enter the same password');
    });

    it('8. Sign up with invalid password confirmation', async () => {
        await LoginPage.signUp('test@test.com', 'testtest', 'testtesq');
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.passwordConfirmFieldError).toHaveText('Please enter the same password');
    });

    it('9. Sign up with empty fields', async () => {
        await LoginPage.signUp('', '', '');
        await expect(LoginPage.successPopUp).not.toBeExisting();
        await expect(LoginPage.emailFieldError).toHaveText('Please enter a valid email address');
        await expect(LoginPage.passwordFieldError).toHaveText('Please enter at least 8 characters');
        await expect(LoginPage.passwordConfirmFieldError).toHaveText('Please enter the same password');
    });
});