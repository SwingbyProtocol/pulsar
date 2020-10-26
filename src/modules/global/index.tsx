import React from 'react';
import { createGlobalStyle as css } from 'styled-components';

import { PulsarGlobalAutoTheming } from '../themes';

export const PulsarGlobalStyles = () => (
  <>
    <PulsarGlobalAutoTheming />
    <Styles />
  </>
);

const Styles = css`
  :root {
    box-sizing: border-box;
    background: var(--sbpulsar-color-bg-normal);
    color: var(--sbpulsar-color-color-normal);
    font-family: -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont,
      '.PingFang-SC-Regular', 'Microsoft YaHei', 'Segoe UI', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
  }

  :root,
  body {
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
`;
