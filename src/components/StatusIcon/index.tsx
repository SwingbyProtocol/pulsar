import React from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';

import { StyledStatusIcon, Variant } from './styles';

type Props = Testable & { variant: Variant; className?: string };

export const StatusIcon = ({ variant, 'data-testid': testId, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return <StyledStatusIcon variant={variant} className={className} data-testid={buildTestId('')} />;
};
