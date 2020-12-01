import React from 'react';

import { Testable, useBuildTestId } from '../../modules/testing';

import { Graphic } from './Graphic';
import { Status } from './statuses';
import { Container, Text } from './styled';

export type Messages = { [k in Status]: string };

export const SwapProgress = ({
  status,
  currencyIn,
  currencyOut,
  className,
  'data-testid': testId,
  messages,
}: Testable & {
  status: Status;
  currencyIn: string;
  currencyOut: string;
  messages?: Messages;
  className?: string;
}) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return (
    <Container className={className} data-testid={buildTestId('')}>
      {messages && <Text>{messages[status]}</Text>}
      <Graphic status={status} currencyIn={currencyIn} currencyOut={currencyOut} />
    </Container>
  );
};
