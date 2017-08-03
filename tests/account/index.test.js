import { before, after } from '../../others/default';
import { login as loginTest } from './../../others/login';
import { portfolio as portfolioTest } from './portfolio';
import { statement as statementTest } from './statement';
import { tokenManagement as tokenManagementTest } from './tokenManagement';
import { logout as logoutTest } from './logout';
import { profitTable as profitTableTest } from './profitTable';
import { accountSwitch as accountSwitchTest } from './accountSwitch';
import password, {newPassword} from './password';

export default {
  before: before,
  after: after,
  'Login': (browser) => browser.perform((browser,done) => loginTest(browser, browser.globals.username, browser.globals.password, done)),
  'Portfolio': portfolioTest,
  'Switch account': accountSwitchTest,
  'Statement': statementTest,
  'Profit Table': profitTableTest,
  'Token Mangement': tokenManagementTest,
  'Change password': (browser) => browser.perform((browser,done) => password(browser, browser.globals.password, newPassword, done)),
  'Login after password change': (browser) => browser.perform((browser,done) => loginTest(browser, browser.globals.username, newPassword, done)),
  'Change password back': (browser) => browser.perform((browser,done) => password(browser, newPassword, browser.globals.password, done)),
  'Login Again': (browser) => browser.perform((browser,done) => loginTest(browser, browser.globals.username, browser.globals.password, done)),
  'Logout': logoutTest,
};
