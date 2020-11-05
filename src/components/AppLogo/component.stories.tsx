import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { AppLogo } from './';

const meta: Meta = {
  title: 'AppLogo',
  component: AppLogo,
};

export default meta;

export const Default = () => (
  <>
    <Item>
      <AppLogo />
    </Item>
    <Item>
      <AppLogo productName="Explorer" />
    </Item>
    <Item>
      <AppLogo productName="Explorer" onClick={() => {}} />
    </Item>
  </>
);

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 1em;
  }
`;
