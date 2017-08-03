/**
 * Created by Arnab Karmakar on 7/29/17.
 */
import assert from 'assert';

export const newPassword = 'WebtraderTesting123_abc';

export default (browser, oldPassword, newPassword, done) => {
    browser
        .pause(5000)
        .execute(() => $('.link.change-password').click())
        .waitForElementPresent('.password-dialog')
        .execute(() => $('.password-dialog').parent('div').find('div.ui-dialog-titlebar > span').text(), [], (title) => {
            assert.equal(title.value, 'Change password', 'Not a password change dialog');
            browser
                .setValue('.password-dialog input[type=password]:nth-of-type(1)', oldPassword)
                .setValue('.password-dialog input[type=password]:nth-of-type(2)', newPassword)
                .setValue('.password-dialog input[type=password]:nth-of-type(3)', newPassword)
                .click('.password-dialog button')
                .pause(5000)
                .url(browser.globals.url)
                .pause(5000)
                .waitForElementPresent('body');
            done();
        });
};
