const openMainPage = {
  open: function () {
    return this
      .waitForElementVisible('body')
      .click('button')
      .waitForElementNotVisible('@spinner')
      .waitForElementVisible('@extensionPopup')
      //Close chrome pop-up
      .click('@cancel')
      .waitForElementPresent('@instrument')
      // .click('@windows')
      .waitForElementPresent('@closeAll')
      //Close all dialogs.
      .click('@closeAll');
  },
}
module.exports = {
  url: function () { return this.api.globals.url },
  commands: [openMainPage],
  elements: {
    spinner: {
      selector: '.sk-spinner-container'
    },
    extensionPopup: {
      selector: '.chrome_extension'
    },
    instrument: {
      selector: '.top-nav-menu .instruments > ul > li:first-of-type'
    },
    windows: {
      selector: '.top-nav-menu .workspace'
    },
    cancel: {
      selector: '.chrome_extension #cancel'
    },
    closeAll: {
      selector: '.top-nav-menu .workspace [rv-on-click=closeAll]'
    }
  }
}
