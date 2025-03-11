import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {
    get loginSubtab () {
        return $('(//android.widget.TextView[@text="Login"])[1]');
    }

    get signUpSubtab () {
        return $('//android.widget.TextView[@text="Sign up"]');
    }

    get emailField () {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get emailFieldError () {
        return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]');
    }

    get passwordField () {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get passwordFieldError () {
        return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]');
    }

    get passwordConfirmField () {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]');
    }

    get passwordConfirmFieldError () {
        return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[3]');
    }

    get loginButton () {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
    }

    get signUpButton () {
        return $('//android.widget.TextView[@text="SIGN UP"]');
    }

    get successPopUp () {
        return $('//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]');
    }

    get successPopUpTitle () {
        return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    }

    get successPopUpText () {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    get closeSuccessPopUpButton () {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    async fillEmail (value) {
        await this.emailField.setValue(value);
    }

    async fillPassword (value) {
        await this.passwordField.setValue(value);
    }

    async fillPasswordConfirm (value) {
        await this.passwordConfirmField.setValue(value);
    }

    async clickLoginButton () {
        await this.loginButton.click();
    }

    async clickSignUpButton () {
        await this.signUpButton.click();
    }

    async openSignUpSubTab () {
        await this.signUpSubtab.click();
    }

    async openLoginSubTab () {
        await this.loginSubtab.click();
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
        await this.closeSuccessPopUpButton.click();
    }

    open () {
        return super.open('Login');
    }
}

export default new LoginPage();
