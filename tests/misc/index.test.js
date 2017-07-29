import { beforeLogin, after } from '../../others/default';
import { help as helpTest } from './help.js';
import { accountSwitch as accountSwitchTest } from './accountSwitch';
import { languageChange as languageChangeTest } from './languageChange';

export default {
  before: beforeLogin,
  after: after,
  'Help': helpTest,
  'Switch account': accountSwitchTest,
  'Language change': languageChangeTest,
}
