import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from './';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button />;
