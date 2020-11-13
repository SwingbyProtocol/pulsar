import React, { useCallback } from 'react';

import { Icon } from '../Icon';
import type { TextInput } from '../TextInput';

import { StyledTextInput, IconContainer } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof TextInput>, 'size'> & {
  value: string;
};

export const CopyToClipboard = ({ value, ...props }: Props) => {
  const copy = useCallback(() => {
    if (typeof navigator === 'undefined') return;
    navigator.clipboard.writeText(value);
  }, [value]);

  return (
    <StyledTextInput
      {...props}
      value={value}
      right={
        <IconContainer onClick={copy}>
          <Icon.Paste />
        </IconContainer>
      }
      disabled
    />
  );
};

CopyToClipboard.displayName = 'CopyToClipboard';
