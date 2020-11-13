import React, { useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import type { Size } from '../Button/styles'; // eslint-disable-line import/no-internal-modules
import { Icon } from '../Icon';

import { Container, Content, ContentWrapper, Left } from './styled';

export type Props = Testable & {
  className?: string;
  value: string;
  size: Size;
  left?: React.ReactNode;
};

export const CopyToClipboard = ({ value, 'data-testid': testId, className, size, left }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const copy = useCallback(() => {
    if (typeof navigator === 'undefined') return;
    navigator.clipboard.writeText(value);
  }, [value]);

  return (
    <Container
      className={className}
      data-testid={buildTestId('')}
      size={size}
      variant="secondary"
      onClick={copy}
    >
      <ContentWrapper>
        {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
        <Content data-testid={buildTestId('content')}>{value}</Content>
      </ContentWrapper>
      <Icon.Paste data-testid={buildTestId('icon')} />
    </Container>
  );
};

CopyToClipboard.displayName = 'CopyToClipboard';
