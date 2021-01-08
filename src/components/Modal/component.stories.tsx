import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { Button } from '../Button';

import { Modal } from './';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  parameters: { theme: 'auto' },
};

export default meta;

export const Default = () => (
  <Container>
    <Modal open={true} onClose={() => {}}>
      <Modal.Content>Some content here</Modal.Content>
    </Modal>
  </Container>
);

export const Test = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Button
        variant="primary"
        size="country"
        shape="fit"
        onClick={() => setOpen(true)}
        data-testid="open"
      >
        Show
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} data-testid="modal">
        <Modal.Content>Some content here</Modal.Content>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // From: https://codepen.io/karaWhiteDragon/pen/zYGGMya
  background-color: #66a3ff;
  background-image: repeating-linear-gradient(
      transparent,
      transparent 50px,
      purple 50px,
      purple 53px,
      transparent 53px,
      transparent 63px,
      purple 63px,
      purple 66px,
      transparent 66px,
      transparent 116px,
      rgba(0, 0, 0, 0.5) 116px,
      rgba(0, 0, 0, 0.5) 166px,
      rgba(255, 255, 255, 0.2) 166px,
      rgba(255, 255, 255, 0.2) 169px,
      rgba(0, 0, 0, 0.5) 169px,
      rgba(0, 0, 0, 0.5) 179px,
      rgba(255, 255, 255, 0.2) 179px,
      rgba(255, 255, 255, 0.2) 182px,
      rgba(0, 0, 0, 0.5) 182px,
      rgba(0, 0, 0, 0.5) 232px,
      transparent 232px
    ),
    repeating-linear-gradient(
      270deg,
      transparent,
      transparent 50px,
      purple 50px,
      purple 53px,
      transparent 53px,
      transparent 63px,
      purple 63px,
      purple 66px,
      transparent 66px,
      transparent 116px,
      rgba(0, 0, 0, 0.5) 116px,
      rgba(0, 0, 0, 0.5) 166px,
      rgba(255, 255, 255, 0.2) 166px,
      rgba(255, 255, 255, 0.2) 169px,
      rgba(0, 0, 0, 0.5) 169px,
      rgba(0, 0, 0, 0.5) 179px,
      rgba(255, 255, 255, 0.2) 179px,
      rgba(255, 255, 255, 0.2) 182px,
      rgba(0, 0, 0, 0.5) 182px,
      rgba(0, 0, 0, 0.5) 232px,
      transparent 232px
    );
`;
