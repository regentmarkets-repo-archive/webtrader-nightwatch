import { before, after } from '../../others/default';
import { assetIndex } from './assetIndex';
import { tradingTimes } from './tradingTimes';
import { viewHistoricalData } from './viewHistoricalData';

export default {
  before: before,
  after: after,
  'Assets Index': assetIndex,
  'Trading Times': tradingTimes,
  'View Historical Data': viewHistoricalData
}
