import React from 'react';

import { Testable, useBuildTestId } from '../../../modules/testing';
import { Modal } from '../../Modal';

import { Scroll, Wrapper } from './styled';

export type Props = Pick<React.ComponentPropsWithoutRef<typeof Modal>, 'children'> &
  Testable & {
    className?: string;
  };

export const Content = ({ 'data-testid': testId, ...otherProps }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return (
    <Scroll>
      <Wrapper {...otherProps} data-testid={buildTestId('')} />
    </Scroll>
  );
};

Content.displayName = 'Modal.Content';
