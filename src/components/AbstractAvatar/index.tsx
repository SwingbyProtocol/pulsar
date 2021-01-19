import React, { useMemo } from 'react';
import { SHA1 } from 'crypto-js';

import { Testable, useBuildTestId } from '../../modules/testing';

import { Svg, Container } from './styled';
import { Square } from './Square';
import { COLORS } from './colors';

export type Props = Testable & {
  value: string;
  className?: string;
};

export const AbstractAvatar = ({ 'data-testid': testId, value, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const hash = useMemo(() => SHA1(value).toString(), [value]);
  const values = useMemo(() => hash.split('').map((it) => Number.parseInt(it, 16)), [hash]);
  const bgColor = useMemo(() => {
    const index = Number.parseInt(hash.split('')[0], 16) % COLORS.length;
    return COLORS[index];
  }, [hash]);

  return (
    <Container className={className} data-testid={buildTestId('')}>
      <Svg viewBox="0 0 15 15">
        <rect x="0" y="0" width="15" height="15" fill={bgColor} />
        <Square values={values} startIndex={0} />
        <Square values={values} startIndex={5} />
        <Square values={values} startIndex={10} />
        <Square values={values} startIndex={15} />
        <Square values={values} startIndex={20} />
      </Svg>
    </Container>
  );
};

AbstractAvatar.displayName = 'AbstractAvatar';
