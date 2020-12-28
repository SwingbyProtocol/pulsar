import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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
      <Dropdown.Item onClick={action('click-item-1')}>Item 1</Dropdown.Item>
      <Dropdown.Item htmlTag="a" onClick={action('click-item-2')}>
        Item 2
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={action('click-item-3')}>Item 3</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item selected onClick={action('click-item-4')}>
        Selected item
      </Dropdown.Item>
      <Dropdown.Item disabled onClick={action('click-item-5')}>
        Disabled item
      </Dropdown.Item>
    </>
  );

  return (
    <Container>
      <Dropdown
        target={<Dropdown.DefaultTarget size="city">Click here!</Dropdown.DefaultTarget>}
        data-testid="dropdown"
      >
        {content}
      </Dropdown>
      <Dropdown
        target={
          <Dropdown.DefaultTarget variant="input" size="state">
            Click here!
          </Dropdown.DefaultTarget>
        }
        data-testid="dropdown-input1"
      >
        {content}
      </Dropdown>
      <Dropdown
        target={
          <Dropdown.DefaultTarget variant="input" size="country">
            Click here!
          </Dropdown.DefaultTarget>
        }
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
