import React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { Modal } from './';

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  parameters: { skipThemeMerging: true },
};

export default meta;

export const Default = () => (
  <Container>
    <Modal open={true} />
  </Container>
);

const Container = styled.div`
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
