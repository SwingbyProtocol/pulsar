import { em } from 'polished';
import styled, { css } from 'styled-components';

export const SIZES = ['city', 'town', 'bare'] as const;
export type Size = typeof SIZES[number];

const town = css`
  padding: ${({ theme }) => em(theme.pulsar.size.street)}
    ${({ theme }) => em(theme.pulsar.size.town)};
`;

const city = css`
  padding: ${({ theme }) => em(theme.pulsar.size.town)} ${({ theme }) => em(theme.pulsar.size.city)};
`;

const bare = css``;

export const StyledCard = styled.div<{ size: Size }>`
  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  border-radius: ${({ theme }) => em(theme.pulsar.size.closet)};
  box-shadow: ${({ theme }) => theme.pulsar.shadow.card};
  padding: 0;

  ${({ size }) => size === 'bare' && bare};
  ${({ size }) => size === 'city' && city};
  ${({ size }) => size === 'town' && town};
`;
