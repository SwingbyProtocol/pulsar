import styled, { css, DefaultTheme } from 'styled-components';
import { em, transitions } from 'polished';

export const VARIANTS = ['primary', 'secondary', 'tertiary'] as const;
export type Variant = typeof VARIANTS[number];

export const SIZES = ['country', 'state', 'city', 'town', 'street'] as const;
export type Size = typeof SIZES[number];

export const SHAPES = ['fill', 'square', 'circle', 'fit'] as const;
export type Shape = typeof SHAPES[number];

const square = (
  size: keyof DefaultTheme['pulsar']['size'],
  base: keyof DefaultTheme['pulsar']['size'] = 'house',
) =>
  css`
    padding: 0;
    width: ${({ theme }) => em(theme.pulsar.size[size], theme.pulsar.size[base])};
    flex-shrink: 0;
    flex-grow: 0;
  `;

const circle = (...args: Parameters<typeof square>) =>
  css`
    ${square(...args)};
    border-radius: 50%;
    flex-shrink: 0;
    flex-grow: 0;
  `;

const fill = css`
  width: 100%;
`;

const fit = css`
  width: fit-content;
`;

const country = css<{ shape: Shape }>`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.country)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house)};
  ${({ shape }) => shape === 'square' && square('country')};
  ${({ shape }) => shape === 'circle' && circle('country')};
`;

const state = css<{ shape: Shape }>`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.state)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house)};
  ${({ shape }) => shape === 'square' && square('state')};
  ${({ shape }) => shape === 'circle' && circle('state')};
`;

const city = css<{ shape: Shape }>`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  height: ${({ theme }) => em(theme.pulsar.size.city, theme.pulsar.size.room)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house, theme.pulsar.size.room)};
  ${({ shape }) => shape === 'square' && square('city', 'room')};
  ${({ shape }) => shape === 'circle' && circle('city', 'room')};
`;

const town = css<{ shape: Shape }>`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  height: ${({ theme }) => em(theme.pulsar.size.town, theme.pulsar.size.room)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house, theme.pulsar.size.room)};
  ${({ shape }) => shape === 'square' && square('town', 'room')};
  ${({ shape }) => shape === 'circle' && circle('town', 'room')};
`;

const street = css<{ shape: Shape }>`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.closet)};
  font-size: ${({ theme }) => em(theme.pulsar.size.closet)};
  height: ${({ theme }) => em(theme.pulsar.size.street, theme.pulsar.size.closet)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house, theme.pulsar.size.closet)};
  ${({ shape }) => shape === 'square' && square('street', 'closet')};
  ${({ shape }) => shape === 'circle' && circle('street', 'closet')};
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
  background: ${({ theme }) => theme.pulsar.color.text.accent};
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

const disabled = css`
  opacity: 0.3;
  pointer-events: none;
`;

export const StyledButton = styled.button<{ size: Size; variant: Variant; shape: Shape }>`
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
  text-decoration: none;
  flex-shrink: 0;
  ${({ theme }) => transitions(['background', 'color'], theme.pulsar.duration.normal)};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};
  ${({ size }) => size === 'town' && town};
  ${({ size }) => size === 'street' && street};

  ${({ shape }) => shape === 'fill' && fill};
  ${({ shape }) => shape === 'fit' && fit};

  ${({ variant }) => variant === 'primary' && primary};
  ${({ variant }) => variant === 'secondary' && secondary};
  ${({ variant }) => variant === 'tertiary' && tertiary};

  :disabled {
    ${disabled};
  }
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

const circleShadow = css`
  border-radius: 50%;
`;

export const Shadow = styled.div<{ variant: Variant; shape: Shape }>`
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

  ${({ shape }) => shape === 'circle' && circleShadow};
`;
