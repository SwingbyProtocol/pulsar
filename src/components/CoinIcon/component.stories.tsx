import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { SUPPORTED_COINS } from '@swingby-protocol/sdk';

import { CoinIcon } from './';

const meta: Meta = {
  title: 'CoinIcon',
  component: CoinIcon,
};

export default meta;

export const Default = () => (
  <Container>
    <CoinIcon symbol="this is not a coin" />
    {SUPPORTED_COINS.map((coin) => (
      <CoinIcon symbol={coin} key={coin} />
    ))}
    <CoinIcon symbol="BNB" />
    <CoinIcon symbol="BTCB-1DE" />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:last-child) {
    margin-right: 1em;
  }
`;
