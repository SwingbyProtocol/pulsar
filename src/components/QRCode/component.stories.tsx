import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';

import { QRCode } from './';

export default {
  component: QRCode,
  title: 'QRCode',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => em(theme.pulsar.size.house)};
`;

export const Default = () => (
  <>
    <Container>
      <QRCode value="a value here" />
    </Container>
    <Container>
      <QRCode value="a value here" style={{ fontSize: 100 }} />
    </Container>
    <QRCode value="a value here" style={{ fontSize: 300 }} />
  </>
);
