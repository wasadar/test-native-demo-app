import Page from './page.js';

const pageName = 'Forms';
const textField = '~text-input';
const textFieldResult = '~input-text-result';
const switchButton = '~switch';
const switchResult = '~switch-text';
const dropdown = '//android.widget.EditText[@resource-id="text_input"]';
const dropdownPopUp = '//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]';
const dropdownOption1 = '(//android.widget.CheckedTextView[@resource-id="android:id/text1"])[';
const dropdownOption2 = ']';
const activeButton = '//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup';
const inactiveButton = '//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup';
const popUp = '//android.widget.LinearLayout[@resource-id="android:id/parentPanel"]';
const popUpButton1 = '//android.widget.Button[@resource-id="android:id/button';
const popUpButton2 = '"]';

class FormsPage extends Page {
    async getTextField () {
        return this.getElement(textField);
    }

    async getTextFieldResult () {
        return this.getElement(textFieldResult);
    }

    async getSwitchButton () {
        return this.getElement(switchButton);
    }

    async getSwitchResult () {
        return this.getElement(switchResult);
    }

    async getDropdown () {
        return this.getElement(dropdown);
    }

    async getDropdownPopUp () {
        return this.getElement(dropdownPopUp);
    }

    async getDropdownOption (number) {
        return this.getElement(dropdownOption1 + number + dropdownOption2);
    }

    async getActiveButton () {
        return this.getElement(activeButton);
    }

    async getInactiveButton () {
        return this.getElement(inactiveButton);
    }

    async getPopUp () {
        return this.getElement(popUp);
    }

    async getPopUpButton (number) {
        return this.getElement(popUpButton1 + number + popUpButton2);
    }

    async fillTextField (value) {
        await this.fillField(await this.getTextField(), value);
    }

    async switchSwich () {
        await this.clickOnElemet(await this.getSwitchButton());
    }

    async openDropdown () {
        await this.clickOnElemet(await this.getDropdown());
    }

    async chooseDropdownOption (number) {
        await this.clickOnElemet(await this.getDropdownOption(number));
    }

    async getDropdownOptionName (number) {
        return await this.getElementText(await this.getDropdownOption(number));
    }

    async pickDropdownOption (number) {
        let option = await this.getDropdownOptionName(number);
        await this.chooseDropdownOption(number);
        return option;
    }

    async clickOnActiveButton () {
        await this.clickOnElemet(await this.getActiveButton());
    }

    async clickOnInactiveButton () {
        await this.clickOnElemet(await this.getInactiveButton());
    }

    async closePopUpByButton (number) {
        await this.clickOnElemet(await this.getPopUpButton(number));
    }

    open () {
        return super.open(pageName);
    }
}

export default new FormsPage();
