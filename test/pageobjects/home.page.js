import { $ } from '@wdio/globals';
import Page from './page.js';

class HomePage extends Page {
    open () {
        return super.open('Home');
    }
}

export default new HomePage();