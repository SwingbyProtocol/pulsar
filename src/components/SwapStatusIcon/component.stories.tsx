import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { SWAP_STATUSES } from '../../modules/swap-statuses';

import { SwapStatusIcon } from '.';

const meta: Meta = {
  title: 'SwapStatusIcon',
  component: SwapStatusIcon,
};

export default meta;

export const Default = () => (
  <Container>
    {SWAP_STATUSES.map((status) => (
      <SwapStatusIcon status={status} />
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:last-child) {
    margin-right: 1em;
  }
`;
