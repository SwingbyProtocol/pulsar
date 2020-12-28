import React, { useState } from 'react';
import styled from 'styled-components';

import { Button } from '../Button';

import { SIZES } from './styled';

import { TextInput } from './';

export default {
  title: 'TextInput',
};

const Common = (props: Partial<React.ComponentPropsWithoutRef<typeof TextInput>>) => {
  const [value, setValue] = useState('');
  return (
    <Container>
      {SIZES.map((size) => (
        <TextInput
          {...props}
          size={size}
          key={size}
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
          placeholder="Some placeholder…"
          data-testid={`input-${size}`}
        />
      ))}
    </Container>
  );
};

export const Default = () => <Common />;

export const WithError = () => <Common label="A label" state="danger" />;

export const WithAll = () => (
  <Common
    label="A label"
    description="A description"
    left={<div>€</div>}
    right={
      <Button variant="primary" size="city">
        MAX
      </Button>
    }
  />
);

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
