export default {
  tradingTimes: (browser) => {
    browser
      .execute(() => $('.workspace [rv-on-click=closeAll]').click())
      .moveToElement('.resources', 0, 0)
      .pause(1000)
      .click('.resources')
      .assert.visible('.resources > ul')
      .click('.resources > ul > li > .tradingTimes')
      .waitForElementPresent('div.tradingTimes')
      .moveToElement('div.tradingTimes', 0, 0)
      .pause(1000)
      .waitForElementNotVisible('div.tradingTimes .dataTables_processing')
      .assert.containsText('div.tradingTimes .ui-dialog-titlebar .ui-dialog-title', 'Trading Times')
      .click('div.tradingTimes .ui-dialog-titlebar > span:nth-of-type(3)')
      .click('div.tradingTimes .ui-selectmenu-open .ui-menu-item:nth-of-type(2)')
      .waitForElementNotVisible('div.tradingTimes .dataTables_processing')
      .click('div.tradingTimes .trading-times-sub-header > span:nth-of-type(2)')
      .click('div.tradingTimes .ui-selectmenu-open .ui-menu-item:nth-of-type(5)')
    //   Selectors not visible.
    //   .click('div.tradingTimes .trading-times-sub-header > span:nth-of-type(3)')
    //   .click('div.tradingTimes .ui-selectmenu-open .ui-menu-item:nth-of-type(2)')
      .assert.containsText('.tradingTimes tbody > tr.odd > td:first-of-type', 'Volatility 10 Index')
      .click('div.tradingTimes .ui-dialog-titlebar-close')
      .waitForElementNotVisible('div.tradingTimes')
  }
}
