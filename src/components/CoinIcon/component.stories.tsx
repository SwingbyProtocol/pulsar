import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { COINS_TEST, COINS_PRODUCTION } from '@swingby-protocol/sdk';

import { CoinIcon } from './';

const meta: Meta = {
  title: 'CoinIcon',
  component: CoinIcon,
};

export default meta;

export const Default = () => (
  <Container>
    <CoinIcon symbol="this is not a coin" />
    {COINS_TEST.map((coin) => (
      <CoinIcon symbol={coin} key={coin} />
    ))}
    {COINS_PRODUCTION.map((coin) => (
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
