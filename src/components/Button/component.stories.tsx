import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { Icon } from '../Icon';

import { SIZES, SHAPES, Variant } from './styles';

import { Button } from './';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Common = ({ variant }: { variant: Variant }) => (
  <Container>
    {SHAPES.map((shape) =>
      SIZES.map((size) => (
        <Button variant={variant} size={size} key={`${shape}-${size}`} shape={shape}>
          {shape === 'fill' ? `A button (size=${size})` : <Icon.Search />}
        </Button>
      )),
    )}
  </Container>
);

export const Primary = () => <Common variant="primary" />;

export const Secondary = () => <Common variant="secondary" />;

export const Tertiary = () => <Common variant="tertiary" />;

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
