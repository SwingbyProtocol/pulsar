import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

import { VARIANTS } from './styled';

import { Text } from './';

const meta: Meta = {
  title: 'Text',
  component: Text,
};

export default meta;

export const Default = () => (
  <>
    {VARIANTS.map((variant) => (
      <Item>
        <Text variant={variant} key={variant}>
          When <Text decoration="underline">Mr. Bilbo Baggins of Bag End</Text> announced that he
          would shortly be celebrating his eleventy-first birthday with a party of special
          magnificence, there was much talk and excitement in <u>Hobbiton</u>.
        </Text>
      </Item>
    ))}
  </>
);

const Item = styled.div`
  :not(:last-child) {
    margin-bottom: 1em;
  }
`;
