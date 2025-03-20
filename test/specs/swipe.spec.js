import { expect } from '@wdio/globals';
import SwipePage from '../pageobjects/swipe.page.js';

describe('Native app demo application\'s swipe tests', () => {
    beforeEach(async () => {
        await SwipePage.open();
    });

    it('14. Swipe horizontal and vertical', async () => {
        await SwipePage.swipeLeft();
        await SwipePage.pause(10000);
        await expect(await SwipePage.getBlockTitle()).toHaveText('GREAT COMMUNITY');
        await SwipePage.swipeRight();
        await SwipePage.pause(10000);
        await expect(await SwipePage.getBlockTitle()).toHaveText('FULLY OPEN SOURCE');

        for (let i = 0; i < 5; i++) {
            await SwipePage.swipeLeft();
            await SwipePage.pause(10000);
        }

        await expect(await SwipePage.getBlockTitle()).toHaveText('COMPATIBLE');
        await SwipePage.swipeUp();
        await SwipePage.pause(10000);
        await expect(await SwipePage.getSecretImage()).toBeDisplayed();
        await SwipePage.swipeDown();
        await SwipePage.pause(10000);
        await expect(await SwipePage.getBlockTitle()).toHaveText('COMPATIBLE');
    });
});