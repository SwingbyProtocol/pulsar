import { createGlobalStyle as css } from 'styled-components';

import { pulsarLightColors, pulsarDarkColors } from './colors';

export const PulsarGlobalAutoTheming = css`
  :root {
    ${pulsarLightColors};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${pulsarDarkColors};
    }
  }
`;
