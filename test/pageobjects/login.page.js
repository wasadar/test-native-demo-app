import Page from './page.js';

const pageName = 'Login';
const loginSubtab = '(//android.widget.TextView[@text="Login"])[1]';
const signUpSubtab = '//android.widget.TextView[@text="Sign up"]';
const emailField = '~input-email';
const emailFieldError = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]';
const passwordField = '~input-password';
const passwordFieldError = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]';
const passwordConfirmField = '~input-repeat-password';
const passwordConfirmFieldError = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[3]';
const loginButton = '//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup';
const signUpButton = '//android.widget.TextView[@text="SIGN UP"]';
const successPopUp = '//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]';
const successPopUpTitle = '//android.widget.TextView[@resource-id="android:id/alertTitle"]';
const successPopUpText = '//android.widget.TextView[@resource-id="android:id/message"]';
const closeSuccessPopUpButton = '//android.widget.Button[@resource-id="android:id/button1"]';

class LoginPage extends Page {
    async getLoginSubtab () {
        return this.getElement(loginSubtab);
    }

    async getSignUpSubtab () {
        return this.getElement(signUpSubtab);
    }

    async getEmailField () {
        return this.getElement(emailField);
    }

    async getEmailFieldError () {
        return this.getElement(emailFieldError);
    }

    async getPasswordField () {
        return this.getElement(passwordField);
    }

    async getPasswordFieldError () {
        return this.getElement(passwordFieldError);
    }

    async getPasswordConfirmField () {
        return this.getElement(passwordConfirmField);
    }

    async getPasswordConfirmFieldError () {
        return this.getElement(passwordConfirmFieldError);
    }

    async getLoginButton () {
        return this.getElement(loginButton);
    }

    async getSignUpButton () {
        return this.getElement(signUpButton);
    }

    async getSuccessPopUp () {
        return this.getElement(successPopUp);
    }

    async getSuccessPopUpTitle () {
        return this.getElement(successPopUpTitle);
    }

    async getSuccessPopUpText () {
        return this.getElement(successPopUpText);
    }

    async getCloseSuccessPopUpButton () {
        return this.getElement(closeSuccessPopUpButton);
    }

    async fillEmail (value) {
        await this.fillField(await this.getEmailField(), value);
    }

    async fillPassword (value) {
        await this.fillField(await this.getPasswordField(), value);
    }

    async fillPasswordConfirm (value) {
        await this.fillField(await this.getPasswordConfirmField(), value);
    }

    async clickLoginButton () {
        await this.clickOnElemet(await this.getLoginButton());
    }

    async clickSignUpButton () {
        await this.clickOnElemet(await this.getSignUpButton());
    }

    async openSignUpSubTab () {
        await this.clickOnElemet(await this.getSignUpSubtab());
    }

    async openLoginSubTab () {
        await this.clickOnElemet(await this.getLoginSubtab());
    }

    async login (email, password) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async signUp (email, password, passwordConfirm) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.fillPasswordConfirm(passwordConfirm);
        await this.clickSignUpButton();
    }

    async closeSuccessPopUp () {
        await this.clickOnElemet(await this.getCloseSuccessPopUpButton());
    }

    open () {
        return super.open(pageName);
    }
}

export default new LoginPage();
