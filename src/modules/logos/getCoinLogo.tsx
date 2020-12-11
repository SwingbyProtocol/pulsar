import * as logos from './urls';

export const getCoinLogo = ({ symbol }: { symbol: string }) => {
  switch (symbol) {
    case 'BTC':
      return logos.CoinBtc;
    case 'BTCB':
    case 'BTC.B':
    case 'BTCB-1DE':
      return logos.CoinBtcb;
    case 'BNB':
      return logos.CoinBnb;
    case 'BTCE':
    case 'WBTC':
      return logos.CoinWbtc;
    default:
      return undefined;
  }
};
