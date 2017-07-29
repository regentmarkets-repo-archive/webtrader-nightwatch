export default {
  languageChange: (browser) => {
    browser
      .click('#display_language')
      .assert.visible('#select_language')
      .assert.cssClassPresent('#select_language > li:nth-of-type(2)', 'invisible')
      .click('#select_language > li:nth-of-type(3)')
      .waitForElementPresent('body')
      .pause(1000)
      .assert.containsText('.trade', 'Handel');
  }
}