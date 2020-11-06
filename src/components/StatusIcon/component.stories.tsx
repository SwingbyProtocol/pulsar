import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { StatusIcon } from './';

const meta: Meta = {
  title: 'StatusIcon',
  component: StatusIcon,
};

export default meta;

export const Default = () => (
  <Container>
    <StatusIcon variant="success" />
    <StatusIcon variant="danger" />
    <StatusIcon variant="warning" />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;

  > *:not(:last-child) {
    margin-right: 1em;
  }
`;
