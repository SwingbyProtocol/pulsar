import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Meta } from '@storybook/react';

import { SIZES } from './styles';

import { Button } from './';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Primary = () => (
  <Container>
    {SIZES.map((size) => (
      <Button variant="primary" size={size} key={size}>
        A button (size={size})
      </Button>
    ))}
  </Container>
);

export const Secondary = () => (
  <Container>
    {SIZES.map((size) => (
      <Button variant="secondary" size={size} key={size}>
        A button (size={size})
      </Button>
    ))}
  </Container>
);

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
