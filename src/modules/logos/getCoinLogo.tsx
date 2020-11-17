import * as logos from './urls';

export const getCoinLogo = ({ symbol }: { symbol: string }) => {
  switch (symbol) {
    case 'BTC':
      return logos.CoinBtc;
    case 'BTCB':
      return logos.CoinBtcb;
    case 'BTC.B':
      return logos.CoinBtcb;
    case 'BTCB-1DE':
      return logos.CoinBtcb;
    case 'BNB':
      return logos.CoinBnb;
    case 'BTCE':
      return logos.CoinBtce;
    case 'WBTC':
      return logos.CoinWbtc;
    default:
      return undefined;
  }
};
