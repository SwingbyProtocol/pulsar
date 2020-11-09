import { em, transitions } from 'polished';
import styled, { css } from 'styled-components';

import { reset } from '../../../modules/reset';
import { defaultTarget } from '../../../modules/target';

export const VARIANTS = ['transparent', 'input'] as const;
export type Variant = typeof VARIANTS[number];

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

const inputShowing = css<{ isShowing: boolean }>`
  border-color: ${({ theme }) => theme.pulsar.color.primary.active};
`;

const input = css<{ isShowing: boolean }>`
  border: 2px solid ${({ theme }) => theme.pulsar.components.input.idle.border};
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  ${({ isShowing }) => isShowing && inputShowing};
`;

const country = css`
  height: ${({ theme }) => em(theme.pulsar.size.country, theme.pulsar.size.room)};
`;

const state = css`
  height: ${({ theme }) => em(theme.pulsar.size.state, theme.pulsar.size.room)};
`;

const city = css`
  height: ${({ theme }) => em(theme.pulsar.size.city, theme.pulsar.size.room)};
`;

export const StyledDefaultTarget = styled.button<{
  variant: Variant;
  isShowing: boolean;
  size: Size;
}>`
  ${defaultTarget};
  font-weight: 700;
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.pulsar.duration.normal)};

  ${({ variant }) => variant === 'input' && input};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};
`;

export const Container = styled.div`
  ${reset};
  flex-grow: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => em(theme.pulsar.size.drawer, theme.pulsar.size.room)};
  margin: 0 ${({ theme }) => em(theme.pulsar.size.house, theme.pulsar.size.drawer)};
  color: ${({ theme }) => theme.pulsar.color.primary.normal};
`;
