import { Meta } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Dropdown } from './';

const meta: Meta = {
  title: 'Dropdown',
  component: Dropdown,
};

export default meta;

export const Bare = () => {
  return <Dropdown target="Click here!">Some content</Dropdown>;
};

export const WithHelpers = () => {
  const content = (
    <>
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item htmlTag="a">Item 2</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Item 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item selected>Selected item</Dropdown.Item>
      <Dropdown.Item disabled>Disabled item</Dropdown.Item>
      <Dropdown.Item disabled>Disabled accent item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item interactive={false}>Non-interactive item</Dropdown.Item>
    </>
  );

  return (
    <Container>
      <Dropdown
        target={<Dropdown.DefaultTarget>Click here!</Dropdown.DefaultTarget>}
        data-testid="dropdown"
      >
        {content}
      </Dropdown>
      <Dropdown
        target={<Dropdown.DefaultTarget variant="input">Click here!</Dropdown.DefaultTarget>}
        data-testid="dropdown-input1"
      >
        {content}
      </Dropdown>
      <Dropdown
        target={<Dropdown.DefaultTarget variant="input">Click here!</Dropdown.DefaultTarget>}
        data-testid="dropdown-input2"
      >
        {content}
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
