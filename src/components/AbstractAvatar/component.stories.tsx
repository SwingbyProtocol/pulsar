import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { AbstractAvatar } from './';

const meta: Meta = {
  title: 'AbstractAvatar',
  component: AbstractAvatar,
};

export default meta;

export const Default = () => (
  <Container>
    <AbstractAvatar value="some random text here" />
    <AbstractAvatar value="some random text here" />
    <AbstractAvatar value="a different random text" />
    <AbstractAvatar value="and another" />
    <AbstractAvatar value="and yet another" />
  </Container>
);

const Container = styled.div`
  display: flex;
  font-size: 5rem;
  flex-wrap: wrap;
  margin-bottom: -1rem;
  margin-right: -1rem;

  > * {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`;
