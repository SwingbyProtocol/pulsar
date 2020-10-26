import { css } from 'styled-components';

export const pulsarDarkColors = css`
  --sbpulsar-color-bg-normal: #2b374a;
  --sbpulsar-color-bg-primary-normal: #31d5b8;
  --sbpulsar-color-bg-primary-active: #21a68e;

  --sbpulsar-color-bg-success-normal: var(--sbpulsar-color-bg-primary-normal);
  --sbpulsar-color-bg-danger-normal: #d14c40;

  --sbpulsar-color-text-dark-bg-normal: #fff;
  --sbpulsar-color-text-dark-bg-masked: #fff;
  --sbpulsar-color-text-dark-bg-accent: #fff;

  --sbpulsar-color-text-light-bg-normal: #4a5463;
  --sbpulsar-color-text-light-bg-masked: #818994;
  --sbpulsar-color-text-light-bg-accent: #2b374a;

  --sbpulsar-color-text-normal: var(--sbpulsar-color-text-dark-bg-normal);
  --sbpulsar-color-text-masked: var(--sbpulsar-color-text-dark-bg-masked);
  --sbpulsar-color-text-accent: var(--sbpulsar-color-text-dark-bg-accent);

  --sbpulsar-color-border-normal: #d7dade;
  --sbpulsar-color-border-danger: #f7c5c3;
`;
