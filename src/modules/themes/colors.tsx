import { css } from 'styled-components';

export const pulsarLightColors = css`
  --sbpulsar-color-primary-normal: #31d5b8;
  --sbpulsar-color-primary-active: #21a68e;

  --sbpulsar-color-success-normal: var(--sbpulsar-color-primary-normal);
  --sbpulsar-color-danger-normal: #d14c40;

  --sbpulsar-color-bg-normal: #fff;

  --sbpulsar-color-text-darkbg-normal: #fff;
  --sbpulsar-color-text-darkbg-masked: #fff;
  --sbpulsar-color-text-darkbg-accent: #fff;

  --sbpulsar-color-text-lightbg-normal: #4a5463;
  --sbpulsar-color-text-lightbg-masked: #818994;
  --sbpulsar-color-text-lightbg-accent: #2b374a;

  --sbpulsar-color-text-normal: var(--sbpulsar-color-text-lightbg-normal);
  --sbpulsar-color-text-masked: var(--sbpulsar-color-text-lightbg-masked);
  --sbpulsar-color-text-accent: var(--sbpulsar-color-text-lightbg-accent);

  --sbpulsar-color-border-normal: #d7dade;
  --sbpulsar-color-border-danger: #f7c5c3;

  --sbpulsar-button-secondary-bg: transparent;
  --sbpulsar-button-secondary-border: var(--sbpulsar-color-primary-normal);
  --sbpulsar-button-secondary-text: var(--sbpulsar-color-primary-normal);
`;

export const pulsarDarkColors = css`
  ${pulsarLightColors};

  --sbpulsar-color-bg-normal: #2b374a;

  --sbpulsar-color-text-normal: var(--sbpulsar-color-text-darkbg-normal);
  --sbpulsar-color-text-masked: var(--sbpulsar-color-text-darkbg-masked);
  --sbpulsar-color-text-accent: var(--sbpulsar-color-text-darkbg-accent);

  --sbpulsar-button-secondary-bg: var(--sbpulsar-color-text-darkbg-normal);
  --sbpulsar-button-secondary-border: transparent;
  --sbpulsar-button-secondary-text: var(--sbpulsar-color-text-lightbg-accent);
`;
