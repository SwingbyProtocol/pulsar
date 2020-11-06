import React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { Card } from './';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

export const Default = () => (
  <>
    <Item>
      <Card size="city">
        <Content>A card!</Content>
      </Card>
    </Item>
    <Item>
      <Card size="town">
        <Content>A card!</Content>
      </Card>
    </Item>
  </>
);

const Content = styled.div`
  border: 1px solid red;
`;

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 1em;
  }
`;
