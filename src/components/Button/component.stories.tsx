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

const DISABLED = [false, true] as const;
const HREF = [undefined, 'https://swingby.network'] as const;

const Common = ({ variant }: { variant: Variant }) => (
  <Container>
    {HREF.map((href) =>
      SHAPES.map((shape) =>
        SIZES.map((size) =>
          DISABLED.map((disabled) => (
            <Button
              variant={variant}
              size={size}
              key={`${href}-${shape}-${size}`}
              shape={shape}
              disabled={disabled}
              href={href}
            >
              {shape === 'fill' || shape === 'fit' ? `A button (size=${size})` : <Icon.Search />}
            </Button>
          )),
        ),
      ),
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
