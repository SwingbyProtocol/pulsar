import React from 'react';
import styled from 'styled-components';

import { SIZES } from '../Button/styles'; // eslint-disable-line import/no-internal-modules
import { Icon } from '../Icon';

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
        left={<Icon.Swingby />}
        value={`A ${size}-sized CopyToClipboard component`}
        data-testid={`copy-${size}`}
      />
    ))}
  </Container>
);

export const Accent = () => (
  <Container>
    {SIZES.map((size) => (
      <CopyToClipboard
        variant="accent"
        size={size}
        key={size}
        left={<Icon.Swingby />}
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
