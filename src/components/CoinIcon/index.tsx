import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import { logos } from '../../modules/logos';

import { StyledCoinIcon, StyledPlaceholder } from './styles';

type Props = Testable & { symbol: string; className?: string };

export const CoinIcon = ({ symbol, 'data-testid': testId, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const icon = useMemo(() => {
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
  }, [symbol]);

  if (!icon) {
    return <StyledPlaceholder className={className} data-testid={buildTestId('')} />;
  }

  return <StyledCoinIcon src={icon} className={className} data-testid={buildTestId('')} />;
};
