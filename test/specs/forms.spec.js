import { expect } from '@wdio/globals';
import FormsPage from '../pageobjects/forms.page.js';

describe('Native app demo application\'s forms tests', () => {
    beforeEach(async () => {
        await FormsPage.open();
    });

    it('10. Input text form', async () => {
        await FormsPage.fillTextField('Something');
        await expect(await FormsPage.getTextFieldResult()).toHaveText('Something');
    });

    it('11. Switch form', async () => {
        await expect(await FormsPage.getSwitchResult()).toHaveText(expect.stringContaining('ON'));
        await FormsPage.switchSwich();
        await expect(await FormsPage.getSwitchResult()).toHaveText(expect.stringContaining('OFF'));
        await FormsPage.switchSwich();
        await expect(await FormsPage.getSwitchResult()).toHaveText(expect.stringContaining('ON'));
    });

    it('12. Dropdown form', async () => {
        let choosenOption = "";

        for (let i = 1; i <= 4; i++) {
            await FormsPage.openDropdown();
            await expect(await FormsPage.getDropdownPopUp()).toBeExisting();
            choosenOption = await FormsPage.pickDropdownOption(i);
            await expect(await FormsPage.getDropdown()).toHaveText(choosenOption);
        }
    });

    it('13. Buttons form', async () => {
        for (let i = 1; i <= 3; i++) {
            await FormsPage.clickOnActiveButton();
            await expect(await FormsPage.getPopUp()).toBeExisting();
            await FormsPage.closePopUpByButton(i);
            await expect(await FormsPage.getPopUp()).not.toBeExisting();
        }

        await FormsPage.clickOnInactiveButton();
        await expect(await FormsPage.getPopUp()).not.toBeExisting();
    });
});