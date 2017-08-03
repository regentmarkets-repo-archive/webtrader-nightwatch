import { before, after } from '../../others/default';
import { help as helpTest } from './help.js';
import { languageChange as languageChangeTest } from './languageChange';

export default {
  before, after,
  'Help': helpTest,
  'Language change': languageChangeTest,
}
