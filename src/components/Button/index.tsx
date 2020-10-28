import React, { useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import { Testable } from '../../modules/testing';

import { Size, StyledButton, Shadow, Variant } from './styles';

type Props = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'> &
  Testable & { size: Size; variant: Variant };

export const Button = ({ onClick, ...props }: Props) => {
  const [{ shadow, opacity }, set] = useSpring(() => ({
    from: { shadow: 0, opacity: 0.3 },
    shadow: 0,
    opacity: 0,
    reset: true,
  }));

  const click = useCallback<NonNullable<Props['onClick']>>(
    (evt) => {
      set({ shadow: 1, opacity: 0 });
      onClick?.(evt);
    },
    [onClick, set],
  );

  return (
    <StyledButton role="button" {...props} onClick={click} as={props.href ? 'a' : 'button'}>
      <Shadow
        as={animated.div}
        style={{
          opacity,
          boxShadow: shadow
            .interpolate({
              range: [0, 1],
              output: [0, 16],
            })
            .interpolate((x) => `0 0 0 ${x}px currentColor`),
        }}
      />
      {props.children}
    </StyledButton>
  );
};
