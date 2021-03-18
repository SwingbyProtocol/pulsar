import * as logos from './urls';

export const getCoinLogo = ({ symbol }: { symbol: string }) => {
  switch (symbol) {
    case 'BTC':
      return logos.CoinBtc;
    case 'BTCB':
    case 'BTC.B':
    case 'BTCB-1DE':
    case 'BTCB.BEP20':
      return logos.CoinBtcb;
    case 'BNB':
    case 'BNB.BEP20':
      return logos.CoinBnb;
    case 'BTCE':
    case 'WBTC':
    case 'WBTC.ERC20':
      return logos.CoinWbtc;
    case 'sbBTC':
    case 'sbBTC.ERC20':
    case 'sbBTC.BEP20':
      return logos.CoinSbbtc;
    default:
      return undefined;
  }
};
