import { createGlobalStyle as css } from 'styled-components';

export const PULSAR_GLOBAL_FONT_HREF = 'https://rsms.me/inter/inter.css';

export const PulsarGlobalStyles = css`
  :root {
    box-sizing: border-box;
    background: ${({ theme }) => theme.pulsar.color.bg.normal};
    color: ${({ theme }) => theme.pulsar.color.text.normal};
    font-family: 'Inter', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont,
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
