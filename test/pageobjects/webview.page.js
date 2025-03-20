import Page from './page.js';

export const internalLinks = ['Docs', 'API', 'Blog', 'Contribute', 'Community', 'Sponsor', 'v9'];
export const languages = ['English', 'Deutsch', 'Español', 'हिन्दी', 'Français', 'Українська', 'فارسی', 'தமிழ்'];
export const externalLinks = [ 
    ['GitHub repository', 'github.com/'], 
    ['@webdriverio on Twitter', 'x.com/'], 
    ['Support Chat on Discord', 'discord.com/']
];

const pageName = 'Webview';
const switchModeButtonLight = '//android.widget.ToggleButton[@text="Switch between dark and light mode (currently light mode)"]';
const switchModeButtonDark = '//android.widget.ToggleButton[@text="Switch between dark and light mode (currently dark mode)"]';
const burgerMenuButton = '//android.view.View[@resource-id="__docusaurus"]/android.view.View[2]/android.widget.Button';
const closeBurgerMenuButton = '//android.view.View[@text="Main"]/android.view.View[3]/android.widget.Button';
const logoButton = '//android.widget.Image[@text="WebdriverIO"]';
const mainPageTitle = '//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]';
const searchButton = '//android.widget.Button[@text="Search (Ctrl+K)"]';
const searchField = '//android.widget.EditText[@resource-id="docsearch-input"]';
const scrollSearchResult = '//android.view.View[@content-desc="scroll"]';
const closeSearchButton = '//android.widget.Button[@text="Cancel"]';
const urlbar = '//android.widget.EditText[@resource-id="com.android.chrome:id/url_bar"]';
const youtubeTitle = '//android.webkit.WebView[@text="Before you continue to YouTube"]';
const languagesButton = '//android.widget.ListView/android.view.View[8]/android.widget.Button';
const internalLink = '~';
const burgerMenuOption1 = '//android.view.View[@content-desc="';
const burgerMenuOption2 = '"]';
const youtubeLink = '@webdriverio on YouTube';

class WebviewPage extends Page {
   async  getSwitchModeButtonLight () {
        return this.getElement(switchModeButtonLight);
    }

    async getSwitchModeButtonDark () {
        return this.getElement(switchModeButtonDark);
    }

    async getBurgerMenuButton () {
        return this.getElement(burgerMenuButton);
    }

    async getCloseBurgerMenuButton () {
        return this.getElement(closeBurgerMenuButton);
    }

    async getLogoButton () {
        return this.getElement(logoButton);
    }

    async getMainPageTitle () {
        return this.getElement(mainPageTitle);
    }

    async getSearchButton () {
        return this.getElement(searchButton);
    }

    async getSearchField () {
        return this.getElement(searchField);
    }

    async getScrollSearchResult () {
        return this.getElement(scrollSearchResult);
    }

    async getCloseSearchButton () {
        return this.getElement(closeSearchButton);
    }

    async getUrlbar () {
        return this.getElement(urlbar);
    }

    async getYoutubeTitle () {
        return this.getElement(youtubeTitle);
    }

    async getLanguagesButton () {
        return this.getElement(languagesButton);
    }

    async getBurgerMenuOption (description) {
        return this.getElement(burgerMenuOption1 + description + burgerMenuOption2);
    }

    async getLink (id) {
        return this.getElement(internalLink + id);
    }

    async openHeaderMenu () {
        await this.clickOnElemet(await this.getBurgerMenuButton());
    }

    async closeHeaderMenu () {
        await this.clickOnElemet(await this.getCloseBurgerMenuButton());
    }

    async switchToDarkMode () {
        await this.clickOnElemet(await this.getSwitchModeButtonLight());
    }

    async switchToLightMode () {
        await this.clickOnElemet(await this.getSwitchModeButtonDark());
    }

    async openSearchWindow () {
        await this.clickOnElemet(await this.getSearchButton());
    }

    async fillSearchField (request) {
        await this.fillField(await this.getSearchField(), request);
    }

    async closeSearchWindow () {
        await this.clickOnElemet(await this.getCloseSearchButton());
    }

    async clickOnLink (id) {
        await this.clickOnElemet(await this.getLink(id));
    }

    async clickOnLogoButton () {
        await this.clickOnElemet(await this.getLogoButton());
    }

    async openLanguagesPopup () {
        await this.clickOnElemet(await this.getLanguagesButton());
    }

    async getLanguagesButtonName () {
        return await this.getElementText(await this.getLanguagesButton());
    }

    async chooseLanguage (language) {
        await this.clickOnElemet(await this.getBurgerMenuOption(language));
    }

    async openYoutudeLink () {
        await this.clickOnLink(youtubeLink);
    }

    open () {
        return super.open(pageName);
    }
}

export default new WebviewPage();