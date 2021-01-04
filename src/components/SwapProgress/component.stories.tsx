import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { rem } from 'polished';

import { SWAP_STATUSES } from '../../modules/swap-statuses';

import { SwapProgress } from './';

const meta: Meta = {
  title: 'SwapProgress',
  component: SwapProgress,
};

export default meta;

export const Default = () => (
  <Container>
    {SWAP_STATUSES.map((status) => (
      <SwapProgress
        messages={SwapProgress.defaultMessages({ locale: 'en' })}
        currencyIn="BTC"
        currencyOut="WBTC"
        status={status}
        key={status}
      />
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
