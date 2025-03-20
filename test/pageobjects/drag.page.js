import Page from './page.js';

const numberToLetter = ['l', 'c', 'r'];

const pageName = 'Drag';
const congratulationsMessage = '//android.widget.TextView[@text="Congratulations"]';
const refreshButton = '//android.widget.TextView[@text="󰁪"]';
const retryButton = '//android.view.ViewGroup[@content-desc="button-Retry"]/android.view.ViewGroup';
const dragFragment1 = '//android.view.ViewGroup[@content-desc="drag-';
const dragFragment2 = '"]/android.widget.ImageView';
const dropFragment1 = '//android.view.ViewGroup[@content-desc="drop-';
const dropFragment2 = '"]/android.view.ViewGroup';

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
    async getCongratulationsMessage () {
        return await this.getElement(congratulationsMessage);
    }

    async getRefreshButton () {
        return await this.getElement(refreshButton);
    }

    async getRetryButton () {
        return await this.getElement(retryButton);
    }

    async getDragFragment (column, row) {
        return await this.getElement(dragFragment1 + numberToLetter[column - 1] + row + dragFragment2);
    }

    async getDropFragment (column, row) {
        return await this.getElement(dropFragment1 + numberToLetter[column - 1] + row + dropFragment2);
    }

    async DragAndDrop (column, row) {
        await dragAndDrop(await this.getDropFragment(column, row), await this.getDragFragment(column, row));
    }

    async clickRefreshButton () {
        await this.clickOnElemet(await this.getRefreshButton());
    }

    async clickRetryButton () {
        await this.clickOnElemet(await this.getRetryButton());;
    }

    open () {
        return super.open(pageName);
    }
}

export default new DragPage();