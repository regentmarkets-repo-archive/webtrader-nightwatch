export default {
  accountSwitch: (browser) => {
    browser
      .click('.account-menu > ul:first-of-type > li .main-account')
      .assert.visible('.account-menu > #all-accounts-top')
      .execute(() => $('.account-menu > #all-accounts-top .login-id-list > a:contains("Virtual Account")').click())
      .pause(10000)
      //If reality check dialog opens, then click continue
      .execute(() => $('div.realitycheck button:contains("Continue Trading")').click())
      .assert.containsText('.account-menu > ul:first-of-type > li .main-account .account-type', 'Virtual Account')
      .assert.containsText('.account-menu > ul:first-of-type > li .main-account .account-id', 'VRTC');
  }
}
