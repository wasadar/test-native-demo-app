import { $ } from '@wdio/globals'
import Page from './page.js';

export const burgerMenuOption = {
    docs: 1,
    API: 2,
    blog: 3,
    contribute: 4,
    community: 5,
    sponsor: 6,
    version: 7,
    languages: 8,
    github: 9,
    twitter: 10,
    youtube: 11,
    discord: 12
};

//android.widget.TextView[@text="Getting Started"]

//android.view.View[@resource-id="__docusaurus_skipToContent_fallback"]//android.vidget.TextView

//android.widget.Button[@text="Languages"]
//android.widget.ListView/android.view.View[8]/android.widget.Button

export const internalLinks = ['Docs', 'API', 'Blog', 'Contribute', 'Community', 'Sponsor', 'v9'];

export const languages = ['English', 'Deutsch', 'Español', 'हिन्दी', 'Français', 'Українська', 'فارسی', 'தமிழ்'];

export const externalLinks = [ 
    ['GitHub repository', 'github.com/'], 
    ['@webdriverio on Twitter', 'x.com/'], 
    ['Support Chat on Discord', 'discord.com/']
];

class WebviewPage extends Page {
    get switchModeButtonLight () {
        return $('//android.widget.ToggleButton[@text="Switch between dark and light mode (currently light mode)"]');
    }

    get switchModeButtonDark () {
        return $('//android.widget.ToggleButton[@text="Switch between dark and light mode (currently dark mode)"]');
    }

    get burgerMenuButton () {
        return $('//android.view.View[@resource-id="__docusaurus"]/android.view.View[2]/android.widget.Button');
    }

    get closeBurgerMenuButton () {
        return $('//android.view.View[@text="Main"]/android.view.View[3]/android.widget.Button');
    }

    get logoButton () {
        return $('//android.widget.Image[@text="WebdriverIO"]');
    }

    get mainPageTitle () {
        return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]');
    }

    get searchButton () {
        return $('//android.widget.Button[@text="Search (Ctrl+K)"]');
    }

    get searchField () {
        return $('//android.widget.EditText[@resource-id="docsearch-input"]');
    }

    get scrollSearchResult () {
        return $('//android.view.View[@content-desc="scroll"]');
    }

    get closeSearchButton () {
        return $('//android.widget.Button[@text="Cancel"]');
    }

    get urlbar () {
        return $('//android.widget.EditText[@resource-id="com.android.chrome:id/url_bar"]');
    }

    get youtubeTitle () {
        return $('//android.webkit.WebView[@text="Before you continue to YouTube"]');
    }

    get languagesButton () {
        return $('//android.widget.ListView/android.view.View[8]/android.widget.Button');
    }

    async burgerMenuOption (description) {
        return await $('//android.view.View[@content-desc="' + description + '"]');
    }

    async openHeaderMenu () {
        await this.burgerMenuButton.click();
    }

    async closeHeaderMenu () {
        await this.closeBurgerMenuButton.click();
    }

    async switchToDarkMode () {
        await this.switchModeButtonLight.click();
    }

    async switchToLightMode () {
        await this.switchModeButtonDark.click();
    }

    async openSearchWindow () {
        await this.searchButton.click();
    }

    async fillSearchField (request) {
        await this.searchField.setValue(request);
    }

    async closeSearchWindow () {
        await this.closeSearchButton.click();
    }

    async clickOnBurgerMenuOption (number) {
        await (await this.burgerMenuOption(number)).click();
    }

    async clickOnLogoButton () {
        await this.logoButton.click();
    }

    async openLanguagesPopup () {
        await this.languagesButton.click();
    }

    async getLanguagesButtonName () {
        return await this.languagesButton.getText();
    }

    async chooseLanguage (language) {
        await (await this.burgerMenuOption(language)).click();
    }

    async openYoutudeLink () {
        await this.clickOnBurgerMenuOption('@webdriverio on YouTube');
    }

    open () {
        return super.open('Webview');
    }
}

export default new WebviewPage();