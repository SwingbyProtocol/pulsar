import { em } from 'polished';
import styled, { css } from 'styled-components';

export const SIZES = ['city', 'town'] as const;
export type Size = typeof SIZES[number];

const town = css`
  padding: ${({ theme }) => em(theme.pulsar.size.street)}
    ${({ theme }) => em(theme.pulsar.size.town)};
`;

const city = css`
  padding: ${({ theme }) => em(theme.pulsar.size.town)} ${({ theme }) => em(theme.pulsar.size.city)};
`;

export const StyledCard = styled.div<{ size: Size }>`
  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  padding: ${({ theme }) => em(theme.pulsar.size.town)} ${({ theme }) => em(theme.pulsar.size.city)};
  border-radius: ${({ theme }) => em(theme.pulsar.size.closet)};
  box-shadow: ${({ theme }) => theme.pulsar.shadow.card};

  ${({ size }) => size === 'city' && city};
  ${({ size }) => size === 'town' && town};
`;
