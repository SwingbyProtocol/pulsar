import React from 'react';
import styled from 'styled-components';

import { PulsarGlobalStyles } from '../src/modules/global';
import { PulsarThemeProvider } from '../src/modules/themes';
import { PulsarTestIdProvider } from '../src/modules/testing';

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
  (Story, { parameters: { theme } }) => {
    if (!!theme) return <Story />;
    return (
      <Container>
        <PulsarThemeProvider theme="light">
          <Section>
            <PulsarTestIdProvider value="light">
              <Story />
            </PulsarTestIdProvider>
          </Section>
        </PulsarThemeProvider>
        <PulsarThemeProvider theme="dark">
          <Section>
            <PulsarTestIdProvider value="dark">
              <Story />
            </PulsarTestIdProvider>
          </Section>
        </PulsarThemeProvider>
        <PulsarThemeProvider theme="accent">
          <Section>
            <PulsarTestIdProvider value="accent">
              <Story />
            </PulsarTestIdProvider>
          </Section>
        </PulsarThemeProvider>
      </Container>
    );
  },
  (Story, { parameters: { theme } }) => (
    <PulsarThemeProvider theme={theme}>
      <PulsarGlobalStyles />
      <Story />
    </PulsarThemeProvider>
  ),
];
