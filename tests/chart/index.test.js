import { before, after } from '../../others/default';
import { chartTemplateTest } from './chartTemplate';
import { chartFunctionTest } from './chart';
import chartLineTest from './chartLines';
import indicatorTest from './indicator';
import overlayTest from './overlay';
import { indicatorAndOverlay as indicatorAndOverlayTest } from './indicatorAndOverlay';

const _openChart = (browser) => {
  browser
  //Open Dialog
      .execute(() => $('.workspace-manager [rv-on-click=closeAll]').click())
      .moveToElement('.top-nav-menu .instruments', 10, 10)
      .waitForElementVisible('.top-nav-menu .instruments > ul > li:last-of-type')
      .moveToElement('.top-nav-menu .instruments > ul > li:last-of-type', 10, 10)
      .assert.visible('.top-nav-menu .instruments > ul > li:last-of-type')
      .moveToElement('.top-nav-menu .instruments > ul > li:last-of-type > ul > li:first-of-type', 10, 10)
      .assert.visible('.top-nav-menu .instruments > ul > li:last-of-type > ul > li:first-of-type')
      .click('.top-nav-menu .instruments > ul > li:last-of-type > ul > li:first-of-type > ul > li:first-of-type')
      .waitForElementVisible('div[role="dialog"]:last-of-type')
      .waitForElementNotVisible('div[role="dialog"]:last-of-type .webtrader-dialog .highcharts-loading')
      .moveToElement('body', 0, 0);
};

export default {
  before: (browser) => {
    before(browser);
    _openChart(browser);
  },
  after: after,
  'Chart functions': chartFunctionTest,
  //'Chart template': chartTemplateTest,
  'Indicator test': indicatorTest.indicator,
  'Overlay test': overlayTest.overlay,
  'IndicatorAndOverlay': (browser) => {
    browser.pause(1000);
    _openChart(browser);
    indicatorAndOverlayTest(browser);
  },
  'Horizontal line': (browser) => {
    _openChart(browser);
    chartLineTest.horizontalLine(browser)
  },
  'Vertical line': chartLineTest.verticalLine
}
