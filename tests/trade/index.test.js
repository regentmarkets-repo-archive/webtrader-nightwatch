/**
 * Tests for trade dialog
 */
import { before, beforeLogin, after } from '../../others/default';
import * as UpDownTests from './upDownTrade';
import * as TouchNoTouchTests from './touchNoTouchTrade';
import * as InOutTests from './inOutTrade';
import * as DigitTests from './digitTrade';
import * as AsianTests from './asianTrade';
import * as tickerTest from './ticker';
import { tradeTemplate } from './tradeTemplate';
import {accountSwitch} from '../account/accountSwitch';

export default {
  before: (browser) => {
    before(browser);
    beforeLogin(browser);
    accountSwitch(browser);
    browser
      .execute(() => $('.workspace [rv-on-click=closeAll]').click())
      // Open volatility 10 index dialog
      .moveToElement('.trade', 10, 10)
      .waitForElementVisible('.trade > ul > li:last-of-type')
      .moveToElement('.trade > ul > li:last-of-type', 10, 10)
      .waitForElementVisible('.trade > ul > li:last-of-type > ul > li:first-of-type')
      .moveToElement('.trade > ul > li:last-of-type > ul > li:first-of-type', 10, 10)
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
