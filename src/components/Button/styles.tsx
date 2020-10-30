import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

export const VARIANTS = ['primary', 'secondary', 'tertiary'] as const;
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
  color: ${({ theme }) => theme.pulsar.color.primary.text};

  :hover,
  :active {
    background: ${({ theme }) => theme.pulsar.color.primary.active};
    color: ${({ theme }) => theme.pulsar.color.primary.text};
  }
`;

const secondary = css`
  border: none;
  background: ${({ theme }) => theme.pulsar.color.text.normal};
  color: ${({ theme }) => theme.pulsar.color.bg.normal};

  :hover,
  :active {
    background: ${({ theme }) => theme.pulsar.color.text.masked};
    color: ${({ theme }) => theme.pulsar.color.bg.normal};
  }
`;

const tertiary = css`
  border: 2px solid ${({ theme }) => theme.pulsar.color.primary.normal};
  background: transparent;
  color: ${({ theme }) => theme.pulsar.color.primary.normal};

  :hover,
  :active {
    background: ${({ theme }) => theme.pulsar.color.primary.active};
    color: ${({ theme }) => theme.pulsar.color.primary.text};
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
  ${({ theme }) => transitions(['background', 'color'], theme.pulsar.duration.normal)};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};

  ${({ variant }) => variant === 'primary' && primary};
  ${({ variant }) => variant === 'secondary' && secondary};
  ${({ variant }) => variant === 'tertiary' && tertiary};
`;

const shadowPrimary = css`
  color: ${({ theme }) => theme.pulsar.color.primary.active};
`;

const shadowSecondary = css`
  color: ${({ theme }) => theme.pulsar.color.text.normal};
`;

const shadowTertiary = css`
  color: ${({ theme }) => theme.pulsar.color.primary.active};
`;

export const Shadow = styled.div<{ variant: Variant }>`
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  pointer-events: none;
  user-select: none;

  ${({ variant }) => variant === 'primary' && shadowPrimary};
  ${({ variant }) => variant === 'secondary' && shadowSecondary};
  ${({ variant }) => variant === 'tertiary' && shadowTertiary};
`;
