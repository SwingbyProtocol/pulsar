import React, { useMemo } from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import { getCoinLogo } from '../../modules/logos';

import { StyledCoinIcon, StyledPlaceholder } from './styles';

type Props = Testable & { symbol: string; className?: string };

export const CoinIcon = ({ symbol, 'data-testid': testId, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const icon = useMemo(() => getCoinLogo({ symbol }), [symbol]);

  if (!icon) {
    return <StyledPlaceholder className={className} data-testid={buildTestId('')} />;
  }

  return (
    <StyledCoinIcon src={icon} className={className} data-testid={buildTestId('')} alt={symbol} />
  );
};
