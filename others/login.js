import head from 'lodash/head';

export default {
  login: (browser, username, password, done) => {

    browser
      .click('.login button')
      .waitForElementVisible('.oauth-dialog')
      .click('.login-pane button')
      //Navigate to oauth.binary.com
      .assert.urlContains('oauth.binary.com')
      //Login
      .setValue('#txtEmail', username)
      .setValue('#txtPass', password)
      .click('button[name=login]')
      .waitForElementVisible('body')
      .waitForElementNotVisible('.sk-spinner-container')
      //Check if logged in
      .waitForElementVisible('.main-account')
      .pause(5000)
      //If reality check dialog opens, then click continue
      .execute(() => $('div.realitycheck button:contains("Continue Trading")').click())
      // Close all chart windows
      .waitForElementPresent('.top-nav-menu .instruments ul:first-of-type li:first-of-type')
      .click('.top-nav-menu .windows')
      //Check account credentials
      .click('.top-nav-menu .windows .closeAll')
      //.assert.containsText('.main-account .account-type', 'Virtual Account')
      //.assert.containsText('.account .main-account .account-id', accountId)
      //Check login dropdown
      .click('.main-account')
      .assert.visible('#all-accounts-top');
    done();

  }
}
