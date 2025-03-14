import { expect } from '@wdio/globals';
import WebviewPage, {internalLinks, languages, externalLinks} from '../pageobjects/webview.page.js';

describe('Native app demo application\'s webview header tests', () => {
    beforeEach(async () => {
        await WebviewPage.open();
    });

    it('16. Webview dark\\light mode', async () => {
        await WebviewPage.openHeaderMenu();
        await expect(WebviewPage.switchModeButtonLight).toBeDisplayed();
        await WebviewPage.switchToDarkMode();
        await expect(WebviewPage.switchModeButtonDark).toBeDisplayed();
        await WebviewPage.switchToLightMode();
        await expect(WebviewPage.switchModeButtonLight).toBeDisplayed();
        await WebviewPage.closeHeaderMenu();
    });

    it('17. Webview search', async () => {
        await WebviewPage.openSearchWindow();
        await WebviewPage.fillSearchField('scroll');
        await expect(WebviewPage.scrollSearchResult).toBeDisplayed();
        await WebviewPage.closeSearchWindow();
    });

    it('18. Webview pages navigation', async () => {
        for (let i = 0; i < internalLinks.length; i++) {
            await WebviewPage.openHeaderMenu();
            await WebviewPage.clickOnBurgerMenuOption(internalLinks[i]);
            await expect(WebviewPage.mainPageTitle).not.toBeExisting();
            await WebviewPage.clickOnLogoButton();
        }
    });

    it('19. Webview change language', async () => {
        let languagesButtonName = "";
        await WebviewPage.openHeaderMenu();

        for (let i = 0; i < languages.length; i++) {
            expect(WebviewPage.getLanguagesButtonName()).not.toBe(languagesButtonName);
            languagesButtonName = await WebviewPage.getLanguagesButtonName();
            await WebviewPage.openLanguagesPopup();
            await WebviewPage.chooseLanguage(languages[i]);
            browser.pause(500);
            await WebviewPage.openHeaderMenu();
        }

        expect(WebviewPage.getLanguagesButtonName()).not.toBe(languagesButtonName);
        await WebviewPage.openLanguagesPopup();
            await WebviewPage.chooseLanguage(languages[0]);
    });

    it('20. Webview external links', async () => {
        for (let i = 0; i < externalLinks.length; i++) {
            await WebviewPage.openHeaderMenu();
            await WebviewPage.clickOnBurgerMenuOption(externalLinks[i][0]);
            await expect(WebviewPage.urlbar).toHaveText(expect.stringContaining(externalLinks[i][1]));
            await driver.back();
        }

        await WebviewPage.openHeaderMenu();
        await WebviewPage.openYoutudeLink();
        await expect(WebviewPage.youtubeTitle).toBeDisplayed();
        await driver.back();
    });
});