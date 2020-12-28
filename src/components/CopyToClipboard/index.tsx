import React, { useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import type { Size } from '../Button/styles'; // eslint-disable-line import/no-internal-modules
import { Icon } from '../Icon';

import { Container, Content, ContentWrapper, Left, Variant } from './styled';

export type Props = Testable & {
  className?: string;
  value: string;
  size: Size;
  left?: React.ReactNode;
  variant?: Variant;
};

export const CopyToClipboard = ({
  value,
  'data-testid': testId,
  className,
  size,
  left,
  variant = 'normal',
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const copy = useCallback(async () => {
    try {
      // @ts-expect-error
      const { state } = await navigator.permissions.query({ name: 'clipboard-write' });
      if (state === 'granted' || state === 'prompt') {
        navigator.clipboard.writeText(value);
      }
    } catch (e) {
      try {
        navigator.clipboard.writeText(value);
      } catch (e) {}
    }
  }, [value]);

  return (
    <Container
      className={className}
      data-testid={buildTestId('')}
      size={size}
      variant="secondary"
      innerVariant={variant}
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
