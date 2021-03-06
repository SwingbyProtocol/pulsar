import React, { useState, useCallback } from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';
import { Tooltip } from '../Tooltip';

import { Context, ContentContext } from './context';
import { TargetContainer, TooltipContent } from './styled';

export type TriggerValue = 'mouseenter' | 'focus' | 'click';

export type Props = Pick<React.HTMLAttributes<HTMLElement>, 'className' | 'children'> &
  Testable & {
    target: React.ReactNode;
  };

export const Component = ({
  children,
  className,
  target,
  'data-testid': testId,
  ...otherProps
}: Props) => {
  const [isShowing, setIsShowing] = useState(false);
  const { buildTestId } = useBuildTestId({ id: testId });

  const toggle = useCallback(() => {
    setIsShowing((value) => !value);
  }, []);

  return (
    <Context.Provider value={{ isShowing, onClose: toggle }}>
      <Tooltip
        placement="auto"
        {...otherProps}
        className={className}
        interactive={true}
        visible={isShowing}
        trigger={undefined}
        content={
          <ContentContext.Provider value={{ testId: buildTestId('content') }}>
            <TooltipContent>{children}</TooltipContent>
          </ContentContext.Provider>
        }
        data-testid={buildTestId('')}
        onClickOutside={toggle}
      >
        <TargetContainer onClick={toggle}>{target}</TargetContainer>
      </Tooltip>
    </Context.Provider>
  );
};

Component.displayName = 'Dropdown';
