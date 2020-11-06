import React from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';

import { Size, StyledCard } from './styles';

type Props = Testable & { children?: React.ReactNode; className?: string; size: Size };

export const Card = ({ 'data-testid': testId, className, children, size }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return (
    <StyledCard className={className} size={size} data-testid={buildTestId('')}>
      {children}
    </StyledCard>
  );
};
