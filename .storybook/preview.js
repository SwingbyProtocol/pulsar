import React from 'react';
import styled, { css } from 'styled-components';

import { PulsarGlobalStyles } from '../src/modules/global';
import { pulsarDarkColors, pulsarLightColors } from '../src/modules/themes';

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

const section = css`
  background: var(--sbpulsar-color-bg-normal);
  color: var(--sbpulsar-color-text-normal);
  padding: 1em;
  flex-grow: 1;
  flex-shrink: 0;
`;

const DarkSection = styled.div`
  ${pulsarDarkColors};
  ${section};
`;

const LightSection = styled.div`
  ${pulsarLightColors};
  ${section};
`;

export const decorators = [
  (Story) => (
    <>
      <PulsarGlobalStyles />
      <Story />
    </>
  ),
  (Story) => (
    <Container>
      <LightSection>
        <Story />
      </LightSection>
      <DarkSection>
        <Story />
      </DarkSection>
    </Container>
  ),
];
