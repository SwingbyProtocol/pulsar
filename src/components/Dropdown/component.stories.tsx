import { Meta } from '@storybook/react';
import React from 'react';

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
  return (
    <Dropdown
      target={<Dropdown.DefaultTarget>Click here!</Dropdown.DefaultTarget>}
      data-testid="dropdown"
    >
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
    </Dropdown>
  );
};
