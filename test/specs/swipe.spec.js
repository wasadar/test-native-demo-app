import { expect } from '@wdio/globals'
import SwipePage from '../pageobjects/swipe.page.js'

describe('Native app demo application\'s swipe tests', () => {
    beforeEach(async () => {
        await SwipePage.open();
    });

    it('14. Swipe horizontal and vertical', async () => {
        await SwipePage.swipeLeft();
        await SwipePage.waitUntilBlockTitleChange('GREAT COMMUNITY');
        await SwipePage.swipeRight();
        await SwipePage.waitUntilBlockTitleChange('FULLY OPEN SOURCE');

        for (let i = 0; i < 5; i++) {
            await SwipePage.swipeLeft();
            await browser.pause(10000);
        }

        await expect(SwipePage.blockTitle).toHaveText('COMPATIBLE');
        await SwipePage.swipeUp();
        await browser.pause(10000);
        await expect(SwipePage.secretImage).toBeDisplayed();
        await SwipePage.swipeDown();
        await browser.pause(10000);
        await expect(SwipePage.blockTitle).toHaveText('COMPATIBLE');
    });
});