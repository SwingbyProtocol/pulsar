import { createGlobalStyle as css } from 'styled-components';

import { pulsarLightColors } from './light';
import { pulsarDarkColors } from './dark';

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
