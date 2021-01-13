import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { CoinIcon } from './';

const meta: Meta = {
  title: 'CoinIcon',
  component: CoinIcon,
};

export default meta;

export const Default = () => (
  <Container>
    <CoinIcon symbol="this is not a coin" />
    <CoinIcon symbol="BTC" />
    <CoinIcon symbol="WBTC" />
    <CoinIcon symbol="sbBTC" />
    <CoinIcon symbol="BTCB" />
    <CoinIcon symbol="BNB" />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:last-child) {
    margin-right: 1em;
  }
`;
