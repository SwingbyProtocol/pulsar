import React from 'react';
import styled from 'styled-components';

import { PulsarGlobalStyles } from '../src/modules/global';
import { PulsarThemeProvider } from '../src/modules/themes';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  layout: 'fullscreen',
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-size: 16px;
`;

const Section = styled.div`
  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  padding: 1em;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const decorators = [
  (Story) => (
    <Container>
      <PulsarThemeProvider theme="light">
        <Section>
          <Story />
        </Section>
      </PulsarThemeProvider>
      <PulsarThemeProvider theme="dark">
        <Section>
          <Story />
        </Section>
      </PulsarThemeProvider>
      <PulsarThemeProvider theme="accent">
        <Section>
          <Story />
        </Section>
      </PulsarThemeProvider>
    </Container>
  ),
  (Story) => (
    <PulsarThemeProvider>
      <PulsarGlobalStyles />
      <Story />
    </PulsarThemeProvider>
  ),
];
