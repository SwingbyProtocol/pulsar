import { em } from 'polished';
import styled, { css } from 'styled-components';

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

const country = css`
  height: ${({ theme }) => em(theme.pulsar.size.country)};
`;

const state = css`
  height: ${({ theme }) => em(theme.pulsar.size.state)};
`;

const city = css`
  height: ${({ theme }) => em(theme.pulsar.size.city)};
`;

export const Container = styled.div<{ size: Size }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.pulsar.color.border.normal};
  border-color: transparent;
  background: ${({ theme }) => theme.pulsar.color.border.normal};
  width: 100%;
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.closet)};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};
`;

export const Content = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  margin-right: ${({ theme }) => em(theme.pulsar.size.closet, theme.pulsar.size.room)};
  font-weight: 700;
`;

export const IconContainer = styled.div`
  color: ${({ theme }) => theme.pulsar.color.text.accent};
`;
