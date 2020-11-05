import React, { useCallback, useContext } from 'react';

import { Testable, useBuildTestId } from '../../../modules/testing';
import { ListItem } from '../../ListItem';
import { Context, ContentContext } from '../context';

import { StyledListItem } from './styled';

export type Props = Omit<React.ComponentPropsWithoutRef<typeof ListItem>, 'showBorder'> & Testable;

export const Component = ({
  children,
  'data-testid': testId,
  interactive = true,
  onClick,
  ...otherProps
}: Props) => {
  const { testId: parentTestId } = useContext(ContentContext);
  const { buildTestId } = useBuildTestId({ id: testId ? parentTestId : undefined });
  const { onClose } = useContext(Context);

  const click = useCallback<NonNullable<Props['onClick']>>(
    (evt) => {
      try {
        onClick?.(evt);
      } catch (e) {
        throw e;
      } finally {
        onClose?.();
      }
    },
    [onClick, onClose],
  );

  return (
    <StyledListItem
      {...otherProps}
      interactive={interactive}
      onClick={click}
      data-testid={buildTestId(testId ?? '')}
    >
      {children}
    </StyledListItem>
  );
};

Component.displayName = 'Dropdown.Item';
