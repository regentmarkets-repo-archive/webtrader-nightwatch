// Trigger double click on elements which can't be focused in selenium.
exports.command = function triggerDblClick (selector) {
    return this.perform((browser, done) => {
        browser.execute((selector) => {
            $(selector).trigger('dblclick');
            return true;
        }, [selector], (result) => {
            done();
        });
    });
}
