import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { PulsarConstants } from '../../modules/themes/constants';

export const VARIANTS = ['primary', 'secondary'] as const;
export type Variant = typeof VARIANTS[number];

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

const country = css`
  border-radius: ${em(PulsarConstants.radius.normal)};
  height: ${em(PulsarConstants.size.country)};
  padding: 0 ${em(PulsarConstants.size.house)};
`;

const state = css`
  border-radius: ${em(PulsarConstants.radius.normal)};
  height: ${em(PulsarConstants.size.state)};
  padding: 0 ${em(PulsarConstants.size.house)};
`;

const city = css`
  border-radius: ${em(PulsarConstants.radius.normal, PulsarConstants.size.room)};
  font-size: ${em(PulsarConstants.size.room)};
  height: ${em(PulsarConstants.size.city, PulsarConstants.size.room)};
  padding: 0 ${em(PulsarConstants.size.house, PulsarConstants.size.room)};
`;

const primary = css`
  background: var(--sbpulsar-color-primary-normals);
  color: var(--sbpulsar-color-text-darkbg-normal);

  :hover,
  :active {
    background: var(--sbpulsar-color-primary-active);
  }
`;

const secondary = css`
  border: 2px solid var(--sbpulsar-color-primary-normal);
  background: transparent;
  color: var(--sbpulsar-color-primary-normal);

  :hover,
  :active {
    background: var(--sbpulsar-color-primary-active);
    color: var(--sbpulsar-color-text-darkbg-normal);
    border-color: transparent;
  }
`;

export const StyledButton = styled.button<{ size: Size; variant: Variant }>`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1em;
  font-weight: 700;
  justify-content: center;
  outline: none;
  position: relative;
  width: 100%;
  ${transitions(['background', 'color'], PulsarConstants.duration.normal)};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};

  ${({ variant }) => variant === 'primary' && primary};
  ${({ variant }) => variant === 'secondary' && secondary};
`;

export const Shadow = styled.div`
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${em(PulsarConstants.radius.normal)};
  pointer-events: none;
  user-select: none;
  color: var(--sbpulsar-color-primary-normal);
`;
