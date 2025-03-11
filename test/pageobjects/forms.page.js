import { $ } from '@wdio/globals';
import Page from './page.js';

class FormsPage extends Page {
    get textField () {
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }

    get textFieldResult () {
        return $('//android.widget.TextView[@content-desc="input-text-result"]');
    }

    get switch () {
        return $('//android.widget.Switch[@content-desc="switch"]');
    }

    get switchResult () {
        return $('//android.widget.TextView[@content-desc="switch-text"]');
    }

    get dropdown () {
        return $('//android.widget.EditText[@resource-id="text_input"]');
    }

    get dropdownPopUp () {
        return $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]');
    }

    dropdownOption (number) {
        return $('(//android.widget.CheckedTextView[@resource-id="android:id/text1"])[' + number + ']');
    }

    get activeButton () {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup');
    }

    get inactiveButton () {
        return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup');
    }

    get popUp () {
        return $('//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]');
    }

    popUpButton (number) {
        return $('//android.widget.Button[@resource-id="android:id/button' + number + '"]')
    }

    async fillTextField (value) {
        await this.textField.setValue(value);
    }

    async switchSwich () {
        await this.switch.click();
    }

    async getSwitchResult () {
        return await this.switchResult.getText();
    }

    async openDropdown () {
        await this.dropdown.click();
    }

    async chooseDropdownOption (number) {
        await this.dropdownOption(number).click();
    }

    async getDropdownOptionName (number) {
        return await this.dropdownOption(number).getText();
    }

    async pickDropdownOption (number) {
        let option = await this.getDropdownOptionName(number);
        await this.chooseDropdownOption(number);
        return option;
    }

    async clickOnActiveButton () {
        await this.activeButton.click();
    }

    async clickOnInactiveButton () {
        await this.inactiveButton.click();
    }

    async closePopUpByButton (number) {
        await this.popUpButton(number).click();
    }

    open () {
        return super.open('Forms');
    }
}

export default new FormsPage();
