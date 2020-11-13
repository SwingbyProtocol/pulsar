import React from 'react';
import styled from 'styled-components';

import { SIZES } from '../TextInput/styled'; // eslint-disable-line import/no-internal-modules

import { CopyToClipboard } from './';

export default {
  title: 'CopyToClipboard',
  component: CopyToClipboard,
};

export const Default = () => (
  <Container>
    {SIZES.map((size) => (
      <CopyToClipboard
        size={size}
        key={size}
        value={`A ${size}-sized CopyToClipboard component`}
        data-testid={`copy-${size}`}
      />
    ))}
  </Container>
);

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
