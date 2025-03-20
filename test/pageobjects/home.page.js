import Page from './page.js';

const pageName = 'Home';

class HomePage extends Page {
    open () {
        return super.open(pageName);
    }
}

export default new HomePage();