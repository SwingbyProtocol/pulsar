import React, { useMemo } from 'react';
import Tippy from '@tippyjs/react';

import { Testable, useBuildTestId } from '../../modules/testing';

import { Styles, ContentContainer } from './styled';

export type TriggerValue = 'mouseenter' | 'focus' | 'click' | 'manual';

export type Props = Pick<React.HTMLProps<HTMLElement>, 'children' | 'style'> &
  Pick<
    React.ComponentProps<typeof Tippy>,
    | 'className'
    | 'onShow'
    | 'onHide'
    | 'visible'
    | 'disabled'
    | 'hideOnClick'
    | 'interactive'
    | 'reference'
    | 'placement'
    | 'onClickOutside'
  > &
  Testable & {
    content: React.ReactNode;
    trigger?: TriggerValue | TriggerValue[];
  };

export const Component = ({
  visible,
  className,
  trigger: triggerProp = ['mouseenter', 'focus'],
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });

  const trigger = useMemo(() => {
    if (!triggerProp || visible) return undefined;
    if (!Array.isArray(triggerProp)) return triggerProp;
    return triggerProp.join(' ');
  }, [triggerProp, visible]);

  return (
    <>
      <Styles />
      <Tippy
        {...otherProps}
        trigger={trigger}
        theme="sb-pulsar-bare"
        arrow={false}
        visible={visible}
        animation="shift-away"
        placement={otherProps.placement ?? 'bottom-start'}
        content={
          <ContentContainer data-testid={buildTestId('content')}>
            {otherProps.content}
          </ContentContainer>
        }
      >
        <div className={className} data-testid={buildTestId('target')}>
          {otherProps.children}
        </div>
      </Tippy>
    </>
  );
};

Component.displayName = 'Tooltip';
