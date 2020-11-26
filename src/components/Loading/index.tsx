import React from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';

import { Svg } from './styled';

type Props = Testable & { className?: string };

export const Loading = ({ 'data-testid': testId, className }: Props) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return (
    <Svg data-testid={buildTestId('')} className={className} viewBox="0 0 46 46">
      <path d="M46 23C46 10.3 35.7 0 23 0C10.3 0 0 10.3 0 23H46ZM3.9 23C3.9 12.5 12.4 3.9 23 3.9C33.6 3.9 42.1 12.5 42.1 23">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 23 23"
          to="360 23 23"
          repeatCount="indefinite"
        />
      </path>
    </Svg>
  );
};
