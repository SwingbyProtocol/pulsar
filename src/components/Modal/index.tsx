import React, { useEffect, useRef } from 'react';
import { animated, useTransition } from 'react-spring';

import { Testable } from '../../modules/testing';

import { Box, Container } from './styles';

type Props = Testable & {
  open: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
};

export const Modal = ({ open, children, className, onClose }: Props) => {
  const box = useRef<HTMLDivElement | null>(null);

  const containerTransitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const boxTransitions = useTransition(open, null, {
    from: { opacity: 0, transform: 'scale(0.5)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.5)' },
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !onClose) return;

    const listener = (evt: WindowEventMap['click']) => {
      if (!box.current || !evt.target) return;
      if (!box.current.contains(evt.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [onClose]);

  return (
    <>
      {containerTransitions.map(
        ({ item, key, props }) =>
          item && (
            <Container as={animated.div} key={key} style={props}>
              {boxTransitions.map(
                ({ item, key, props }) =>
                  item && (
                    <Box as={animated.div} key={key} style={props} className={className} ref={box}>
                      {children}
                    </Box>
                  ),
              )}
            </Container>
          ),
      )}
    </>
  );
};
