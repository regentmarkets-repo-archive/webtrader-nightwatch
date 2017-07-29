import { before, after } from '../../others/default';
import { login as loginTest } from './login';
import { portfolio as portfolioTest } from './portfolio';
import { statement as statementTest } from './statement';
import { tokenManagement as tokenManagementTest } from './tokenManagement';
import { logout as logoutTest } from './logout';
import { profitTable as profitTableTest } from './profitTable';

export default {
  before: before,
  after: after,
  'Login': loginTest,
  'Portfolio': portfolioTest,
  'Statement': statementTest,
  'Profit Table': profitTableTest,
  'Token Mangement': tokenManagementTest,
  'Logout': logoutTest
}
