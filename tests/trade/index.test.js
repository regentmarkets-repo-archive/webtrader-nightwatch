/**
 * Tests for trade dialog
 */
import { beforeLogin, after } from '../../others/default';
import * as UpDownTests from './upDownTrade';
import * as TouchNoTouchTests from './touchNoTouchTrade';
import * as InOutTests from './inOutTrade';
import * as DigitTests from './digitTrade';
import * as AsianTests from './asianTrade';
import * as tickerTest from './ticker';
import { tradeTemplate } from './tradeTemplate';

export default {
  before: (browser) => {
    beforeLogin(browser);
    browser
      // Open volatility 10 index dialog
      .click('.trade')
      .waitForElementVisible('.trade > ul > li:last-of-type')
      .click('.trade > ul > li:last-of-type')
      .waitForElementVisible('.trade > ul > li:last-of-type > ul > li:first-of-type')
      .click('.trade > ul > li:last-of-type > ul > li:first-of-type')
      .waitForElementVisible('.trade > ul > li:last-of-type > ul > li:first-of-type > ul > li:first-of-type')
      .click('.trade > ul > li:last-of-type > ul > li:first-of-type > ul > li:first-of-type')
      .waitForElementPresent('.trade-dialog')
  },
  after: after,
  'Sparkline': tickerTest.ticker,
  'Rise': UpDownTests.rise,
  'Fall': UpDownTests.fall,
  'Higher': UpDownTests.higher,
  'Lower': UpDownTests.lower,
  'Touch': TouchNoTouchTests.touch,
  'No touch': TouchNoTouchTests.noTouch,
  'Out': InOutTests.out,
  'In': InOutTests.in,
  'Matches': DigitTests.matches,
  'Differs': DigitTests.differs,
  'Over': DigitTests.over,
  'Under': DigitTests.under,
  'Even': DigitTests.even,
  'Odd': DigitTests.odd,
  'Asian up': AsianTests.up,
  'Asian down': AsianTests.down,
  'Trade template': tradeTemplate
}
