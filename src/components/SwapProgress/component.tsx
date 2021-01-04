import React from 'react';

import { SwapStatus } from '../../modules/swap-statuses';
import { Testable, useBuildTestId } from '../../modules/testing';

import { Graphic } from './Graphic';
import { Container, Text } from './styled';

export type Messages = { [k in SwapStatus]: string };

export const SwapProgress = ({
  status,
  currencyIn,
  currencyOut,
  className,
  'data-testid': testId,
  messages,
}: Testable & {
  status: SwapStatus;
  currencyIn: string;
  currencyOut: string;
  messages?: Messages;
  className?: string;
}) => {
  const { buildTestId } = useBuildTestId({ id: testId });
  return (
    <Container className={className} data-testid={buildTestId('')}>
      {messages && <Text dangerouslySetInnerHTML={{ __html: messages[status] }} />}
      <Graphic status={status} currencyIn={currencyIn} currencyOut={currencyOut} />
    </Container>
  );
};
