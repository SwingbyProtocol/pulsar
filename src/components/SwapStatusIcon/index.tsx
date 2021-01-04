import React from 'react';

import { SwapStatus } from '../../modules/swap-statuses';
import { Testable, useBuildTestId } from '../../modules/testing';

import { StyledStatusIcon } from './styles';

type Props = Testable & { status: SwapStatus; className?: string };

export const SwapStatusIcon = ({ status, 'data-testid': testId, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return <StyledStatusIcon status={status} className={className} data-testid={buildTestId('')} />;
};
