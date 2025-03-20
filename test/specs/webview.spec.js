import { expect } from '@wdio/globals';
import WebviewPage, {internalLinks, languages, externalLinks} from '../pageobjects/webview.page.js';

describe('Native app demo application\'s webview header tests', () => {
    beforeEach(async () => {
        await WebviewPage.open();
    });

    it('16. Webview dark\\light mode', async () => {
        await WebviewPage.openHeaderMenu();
        await expect(await WebviewPage.getSwitchModeButtonLight()).toBeDisplayed();
        await WebviewPage.switchToDarkMode();
        await expect(await WebviewPage.getSwitchModeButtonDark()).toBeDisplayed();
        await WebviewPage.switchToLightMode();
        await expect(await WebviewPage.getSwitchModeButtonLight()).toBeDisplayed();
        await WebviewPage.closeHeaderMenu();
    });

    it('17. Webview search', async () => {
        await WebviewPage.openSearchWindow();
        await WebviewPage.fillSearchField('scroll');
        await expect(await WebviewPage.getScrollSearchResult()).toBeDisplayed();
        await WebviewPage.closeSearchWindow();
    });

    it('18. Webview pages navigation', async () => {
        for (let i = 0; i < internalLinks.length; i++) {
            await WebviewPage.openHeaderMenu();
            await WebviewPage.clickOnLink(internalLinks[i]);
            await expect(await WebviewPage.getMainPageTitle()).not.toBeExisting();
            await WebviewPage.clickOnLogoButton();
        }
    });

    it('19. Webview change language', async () => {
        let languagesButtonName = "";
        await WebviewPage.openHeaderMenu();
        
        for (let i = 1; i < languages.length; i++) {
            expect(await WebviewPage.getLanguagesButtonName()).not.toBe(languagesButtonName);
            languagesButtonName = await WebviewPage.getLanguagesButtonName();
            await WebviewPage.openLanguagesPopup();
            await WebviewPage.pause(500);
            await WebviewPage.chooseLanguage(languages[i]);
            await WebviewPage.pause(500);
            await WebviewPage.openHeaderMenu();
        }

        expect(await WebviewPage.getLanguagesButtonName()).not.toBe(languagesButtonName);
        await WebviewPage.openLanguagesPopup();
        await WebviewPage.pause(500);
        await WebviewPage.chooseLanguage(languages[0]);
    });

    it('20. Webview external links', async () => {
        for (let i = 0; i < externalLinks.length; i++) {
            await WebviewPage.openHeaderMenu();
            await WebviewPage.clickOnLink(externalLinks[i][0]);
            await expect(await WebviewPage.getUrlbar()).toHaveText(expect.stringContaining(externalLinks[i][1]));
            await WebviewPage.return();
        }

        await WebviewPage.openHeaderMenu();
        await WebviewPage.openYoutudeLink();
        await expect(await WebviewPage.getYoutubeTitle()).toBeDisplayed();
        await WebviewPage.return();
    });
});