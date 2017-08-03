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
      .execute(() => $('.windows .closeAll').click())
      .click('.top-nav-menu .instruments')
      .waitForElementVisible('.top-nav-menu .instruments > ul')
      .click('.top-nav-menu .instruments > ul > li:last-of-type')
      .assert.visible('.top-nav-menu .instruments > ul > li:last-of-type')
      .click('.top-nav-menu .instruments > ul > li:last-of-type > ul > li:first-of-type')
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
