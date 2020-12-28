import React from 'react';
import { Meta } from '@storybook/react';

import { Button } from '../Button';

import { ListItem } from './';

const meta: Meta = {
  title: 'ListItem',
  component: ListItem,
};

export default meta;

export const Default = () => (
  <>
    <ListItem selected>Selected</ListItem>
    <ListItem
      left={
        <Button variant="secondary" size="city">
          Left
        </Button>
      }
      right={
        <Button variant="secondary" size="city">
          Right
        </Button>
      }
    >
      <Button variant="primary" size="country">
        Custom
      </Button>
    </ListItem>
    <ListItem interactive={false} htmlTag="div">
      Non-interactive
    </ListItem>
  </>
);
