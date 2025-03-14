import { expect } from '@wdio/globals';
import DragPage from '../pageobjects/drag.page.js';

describe('Native app demo application\'s drag and drop tests', () => {
    beforeEach(async () => {
        await DragPage.open();
    });

    it('15. Drag and drop', async () => {
        await DragPage.DragAndDrop(1,1);
        await expect(await DragPage.dropFragment(1,1)).not.toBeExisting();
        await DragPage.clickRefreshButton();
        await expect(await DragPage.dropFragment(1,1)).toBeExisting();

        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                await DragPage.DragAndDrop(j,i);
            }
        }

        await expect(DragPage.congratulationsMessage).toBeExisting();
        await DragPage.clickRetryButton();
        await expect(DragPage.congratulationsMessage).not.toBeExisting();
    });
});