import { $ } from '@wdio/globals';
import Page from './page.js';

const numberToLetter = ['l', 'c', 'r'];

export async function dragAndDrop (target, source) {
    const sourceLocation = await source.getLocation();
    const targetLocation = await target.getLocation();

    await browser.performActions([
    {
        type: 'pointer',
        id: 'mouse',
        parameters: { pointerType: 'mouse' },
        actions: [
        { type: 'pointerMove', duration: 0, x: sourceLocation.x, y: sourceLocation.y },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 100 },
        { type: 'pointerMove', duration: 250, x: targetLocation.x, y: targetLocation.y },
        { type: 'pointerUp', button: 0 }
        ],
    },
    ]);
}

class DragPage extends Page {
    get congratulationsMessage () {
        return $('//android.widget.TextView[@text="Congratulations"]');
    }

    get refreshButton () {
        return $('//android.widget.TextView[@text="󰁪"]');
    }

    get retryButton () {
        return $('//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup');
    }

    async dragFragment (column, row) {
        return await $('//android.view.ViewGroup[@content-desc="drag-' + numberToLetter[column - 1] + row + '"]/android.widget.ImageView');
    }

    async dropFragment (column, row) {
        return await $('//android.view.ViewGroup[@content-desc="drop-' + numberToLetter[column - 1] + row + '"]/android.view.ViewGroup');
    }

    async DragAndDrop (column, row) {
        await dragAndDrop(await this.dropFragment(column, row), await this.dragFragment(column, row));
    }

    async clickRefreshButton () {
        await this.refreshButton.click();
    }

    async clickRetryButton () {
        await this.retryButton.click();
    }

    open () {
        return super.open('Drag');
    }
}

export default new DragPage();