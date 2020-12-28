import React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { Button } from '../Button';

import { SIZES } from './styles';

import { Card } from './';

const meta: Meta = {
  title: 'Card',
  component: Card,
};

export default meta;

export const Default = () => (
  <>
    {SIZES.map((size) => (
      <Item>
        <Card size={size} key={size}>
          A card!
          <Button variant="primary" size="country">
            With a button
          </Button>
        </Card>
      </Item>
    ))}
  </>
);

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 1em;
  }
`;
