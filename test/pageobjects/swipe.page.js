import Page from './page.js';

const pageName = 'Swipe';
const swipeTitle = '//android.widget.TextView[@text="Swipe horizontal"]';
const blockTitle = '(//android.view.ViewGroup[@content-desc="slideTextContainer"])[1]/android.widget.TextView[1]';
const secretImage = '~WebdriverIO logo';

class SwipePage extends Page {
    async getSwipeTitle () {
        return this.getElement(swipeTitle);
    }

    async getBlockTitle () {
        return this.getElement(blockTitle);
    }

    async getSecretImage () {
        return this.getElement(secretImage);
    }

    async swipeCarousel (direction) {
        const blockTitle = await this.getBlockTitle();
        const rect = await this.getElementLocation(blockTitle);
        const size = await this.getElementSize(blockTitle);
    
        let startX = rect.x + size.width / 2;
        let Y = rect.y + size.height / 2;
        let endX = startX;
        let distance = 300;

        switch (direction) {
            case 'left':
                endX = startX - distance;
                break;
            case 'right':
                endX = startX + distance;
                break;
            default:
                throw new Error(`Wrong direction: ${direction}`);
        }
     
        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: Y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 250, x: endX, y: Y },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
    }

    async swipeVertical (direction) {
        const minY = 150;
        const maxY = 1950;
        const X = 500;

        let startY, endY;
    
        switch (direction) {
            case 'up':
                startY = maxY;
                endY = minY;
                break;
            case 'down':
                startY = minY;
                endY = maxY;
                break;
            default:
                throw new Error(`Wrong direction: ${direction}`);
        }

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: X, y: startY },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 100 },
                    { type: 'pointerMove', duration: 250, x: X, y: endY },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
    }

    async swipeUp () {
        await this.swipeVertical("up");
    }

    async swipeDown () {
        await this.swipeVertical("down");
    }

    async swipeRight () {
        await this.swipeCarousel("right");
    }

    async swipeLeft () {
        await this.swipeCarousel("left");
    }

    async getBlockTitleText () {
        return this.getElementText(await this.getBlockTitle());
    }

    async waitUntilBlockTitleChange (title) {
        await browser.waitUntil( async () => {
            let text = await this.getBlockTitleText();
            return text == title;
        }, {
            timeout: 15000,
            timeoutMsg: `Expected ${title} title, but found ${await this.getBlockTitleText()} title`
        });
    }

    open () {
        return super.open(pageName);
    }
}

export default new SwipePage();