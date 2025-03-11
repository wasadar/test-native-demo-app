export default class Page {
    async open(tabname) {
        await $('//android.widget.TextView[@text="' + tabname + '"]').click();
    }
}
