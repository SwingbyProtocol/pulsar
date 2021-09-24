import React, { useEffect, useMemo, useRef } from 'react';
import { animated, useTransition } from 'react-spring';

import { baseLogger } from '../../modules/logger';
import { Testable, useBuildTestId } from '../../modules/testing';
import { Button } from '../Button';
import { Icon } from '../Icon';

import { Box, CloseButton, Container } from './styles';

type Props = Testable & {
  open: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: () => void;
};

const logger = baseLogger.extend('Modal');

export const Component = ({
  open,
  children,
  className,
  onClose: onCloseParam,
  'data-testid': testId,
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
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

  const onClose = useMemo(() => {
    if (typeof onCloseParam !== 'function') {
      return undefined;
    }

    return () => {
      logger('`onClose()` called.');
      onCloseParam();
    };
  }, [onCloseParam]);

  useEffect(() => {
    if (typeof window === 'undefined' || !onClose || !open) return;

    const listener = (evt: WindowEventMap['click']) => {
      if (!box.current || !evt.target) return;
      if (!box.current.contains(evt.target as Node)) {
        logger(
          'Listened to a click outside of the modal. Will call `onClose()`.\nevt.target=%O',
          evt.target,
        );
        onClose();
      } else {
        logger(
          'Listened to a click inside of the modal. Will *not* call `onClose()`.\nevt.target=%O',
          evt.target,
        );
      }
    };

    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [open, onClose]);

  return (
    <>
      {containerTransitions.map(
        ({ item, key, props }) =>
          item && (
            <Container as={animated.div} key={key} style={props}>
              {boxTransitions.map(
                ({ item, key, props }) =>
                  item && (
                    <Box
                      as={animated.div}
                      key={key}
                      style={props}
                      className={className}
                      ref={box}
                      data-testid={buildTestId('')}
                    >
                      {onClose && (
                        <CloseButton>
                          <Button
                            variant="secondary"
                            size="street"
                            shape="circle"
                            onClick={onClose}
                            data-testid={buildTestId('close-btn')}
                          >
                            <Icon.Cross />
                          </Button>
                        </CloseButton>
                      )}
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

Component.displayName = 'Modal';
