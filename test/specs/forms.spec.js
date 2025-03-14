import { expect } from '@wdio/globals';
import FormsPage from '../pageobjects/forms.page.js';

describe('Native app demo application\'s forms tests', () => {
    beforeEach(async () => {
        await FormsPage.open();
    });

    it('10. Input text form', async () => {
        await FormsPage.fillTextField('Something');
        await expect(FormsPage.textFieldResult).toHaveText('Something');
    });

    it('11. Switch form', async () => {
        await expect(FormsPage.switchResult).toHaveText(expect.stringContaining('ON'));
        await FormsPage.switchSwich();
        await expect(FormsPage.switchResult).toHaveText(expect.stringContaining('OFF'));
        await FormsPage.switchSwich();
        await expect(FormsPage.switchResult).toHaveText(expect.stringContaining('ON'));
    });

    it('12. Dropdown form', async () => {
        let choosenOption = "";

        for (let i = 1; i <= 4; i++) {
            await FormsPage.openDropdown();
            await expect(FormsPage.dropdownPopUp).toBeExisting();
            choosenOption = await FormsPage.pickDropdownOption(i);
            await expect(FormsPage.dropdown).toHaveText(choosenOption);
        }
    });

    it('13. Buttons form', async () => {
        for (let i = 1; i <= 3; i++) {
            await FormsPage.clickOnActiveButton();
            await expect(FormsPage.popUp).toBeExisting();
            await FormsPage.closePopUpByButton(i);
            await expect(FormsPage.popUp).not.toBeExisting();
        }

        await FormsPage.clickOnInactiveButton();
        await expect(FormsPage.popUp).not.toBeExisting();
    });
});