import React, { useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import { Icon } from '../Icon';

import { Container, Content, IconContainer, Size } from './styled';

export type Props = Testable & { className?: string; value: string; size: Size };

export const CopyToClipboard = ({ value, 'data-testid': testId, className, size }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const copy = useCallback(() => {
    if (typeof navigator === 'undefined') return;
    navigator.clipboard.writeText(value);
  }, [value]);

  return (
    <Container className={className} data-testid={buildTestId('')} size={size}>
      <Content data-testid={buildTestId('content')}>{value}</Content>
      <IconContainer onClick={copy} data-testid={buildTestId('copy-btn')}>
        <Icon.Paste />
      </IconContainer>
    </Container>
  );
};

CopyToClipboard.displayName = 'CopyToClipboard';
