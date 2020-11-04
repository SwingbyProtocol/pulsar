import React, { useContext } from 'react';

import { Context } from '../context';
import { Icon } from '../../Icon';

import { StyledDefaultTarget, Container, IconContainer } from './styled';

export const DefaultTarget = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode },
) => {
  const { isShowing } = useContext(Context);

  return (
    <StyledDefaultTarget {...props} as="button">
      <Container>{props.children}</Container>
      <IconContainer>{isShowing ? <Icon.CaretUp /> : <Icon.CaretDown />}</IconContainer>
    </StyledDefaultTarget>
  );
};

DefaultTarget.displayName = 'Dropdown.DefaultTarget';
