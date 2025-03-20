const tabbutton1 = '//android.widget.TextView[@text="';
const tabbutton2 = '"]';

export default class Page {
    async open (tabname) {
        await this.clickOnElemet(await this.getElement(tabbutton1 + tabname + tabbutton2));
    }

    async getElement (element) {
        return await $(element);
    }

    async clickOnElemet (element) {
        await element.click();
    }

    async fillField (element, value) {
        await element.setValue(value);
    }

    async getElementText (element) {
        return await element.getText();
    }

    async getElementLocation (element) {
        return await element.getLocation();
    }

    async getElementSize (element) {
        return await element.getSize();
    }

    async pause (timeout) {
        await browser.pause(timeout);
    }

    async return () {
        driver.back();
    }
}
