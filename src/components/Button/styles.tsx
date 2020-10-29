import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

export const VARIANTS = ['primary', 'secondary'] as const;
export type Variant = typeof VARIANTS[number];

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

const country = css`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.country)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house)};
`;

const state = css`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.state)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house)};
`;

const city = css`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  height: ${({ theme }) => em(theme.pulsar.size.city, theme.pulsar.size.room)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house, theme.pulsar.size.room)};
`;

const primary = css`
  background: ${({ theme }) => theme.pulsar.color.primary.normal};
  color: ${({ theme }) => theme.pulsar.color.readable.normal(theme.pulsar.color.primary.normal)};

  :hover,
  :active {
    background: ${({ theme }) => theme.pulsar.color.primary.active};
    color: ${({ theme }) => theme.pulsar.color.readable.normal(theme.pulsar.color.primary.active)};
  }
`;

const secondary = css`
  border: 2px solid ${({ theme }) => theme.pulsar.components.button.secondary.idle.border};
  background: ${({ theme }) => theme.pulsar.components.button.secondary.idle.bg};
  color: ${({ theme }) => theme.pulsar.components.button.secondary.idle.color};

  :hover,
  :active {
    background: ${({ theme }) => theme.pulsar.components.button.secondary.active.bg};
    color: ${({ theme }) => theme.pulsar.components.button.secondary.active.color};
    border-color: ${({ theme }) => theme.pulsar.components.button.secondary.active.border};
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
  ${({ theme }) => transitions(['background', 'color'], theme.pulsar.duration.normal)};

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
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  pointer-events: none;
  user-select: none;
  color: ${({ theme }) => theme.pulsar.color.primary.active};
`;
