import React, { useCallback, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import { Testable, useBuildTestId } from '../../modules/testing';

import {
  Container,
  Description,
  Input,
  InputContainer,
  State,
  Left,
  Right,
  Size,
  Label,
} from './styled';

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'value' | 'size'
> &
  Testable & {
    label?: React.ReactNode;
    description?: React.ReactNode;
    state?: State;
    value: NonNullable<React.InputHTMLAttributes<HTMLInputElement>['value']>;
    left?: React.ReactNode;
    right?: React.ReactNode;
    size: Size;
  };

export const Component = ({
  className,
  label,
  description,
  'data-testid': testId,
  onFocus,
  onBlur,
  state = 'normal',
  left,
  right,
  size,
  id: idProp,
  ...props
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  const id = useMemo(() => idProp || `id-${nanoid()}`, [idProp]);
  const [isFocused, setFocused] = useState(false);

  const focus = useCallback<NonNullable<Props['onFocus']>>(
    (evt) => {
      setFocused(true);
      onFocus?.(evt);
    },
    [onFocus],
  );

  const blur = useCallback<NonNullable<Props['onBlur']>>(
    (evt) => {
      setFocused(false);
      onBlur?.(evt);
    },
    [onBlur],
  );

  return (
    <Container className={className} data-testid={testId}>
      {!!label && (
        <Label htmlFor={id} data-testid={buildTestId('label')}>
          {label}
        </Label>
      )}
      <InputContainer isFocused={isFocused} state={state} size={size}>
        {left && <Left data-testid={buildTestId('left')}>{left}</Left>}
        <Input
          {...props}
          data-testid={buildTestId('native-input')}
          id={id}
          onFocus={focus}
          onBlur={blur}
        />
        {right && <Right data-testid={buildTestId('right')}>{right}</Right>}
      </InputContainer>
      {!!description && (
        <Description data-testid={buildTestId('description')}>{description}</Description>
      )}
    </Container>
  );
};

Component.displayName = 'TextInput';
