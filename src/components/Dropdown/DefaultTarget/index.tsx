import React, { useContext } from 'react';

import { Context } from '../context';
import { Icon } from '../../Icon';

import { StyledDefaultTarget, Container, IconContainer, Variant, Size, Space } from './styled';

export const DefaultTarget = ({
  variant = 'transparent',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: Variant;
  size: Size;
}) => {
  const { isShowing } = useContext(Context);

  return (
    <StyledDefaultTarget {...props} variant={variant} isShowing={isShowing} as="button">
      <Container>{props.children}</Container>
      {variant === 'input' && <Space />}
      <IconContainer>{isShowing ? <Icon.CaretUp /> : <Icon.CaretDown />}</IconContainer>
    </StyledDefaultTarget>
  );
};

DefaultTarget.displayName = 'Dropdown.DefaultTarget';
