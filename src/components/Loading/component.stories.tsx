import React from 'react';
import { Meta } from '@storybook/react';

import { Loading } from './';

const meta: Meta = {
  title: 'Loading',
  component: Loading,
};

export default meta;

export const Default = () => <Loading />;
