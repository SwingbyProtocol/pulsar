import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { rem } from 'polished';

import { SwapProgress, STATUSES } from './';

const meta: Meta = {
  title: 'SwapProgress',
  component: SwapProgress,
};

export default meta;

export const Default = () => (
  <Container>
    {STATUSES.map((status) => (
      <SwapProgress currencyIn="BTC" currencyOut="WBTC" status={status} key={status} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: ${rem(50)};

  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
