import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

export const SIZES = ['country', 'state', 'city'] as const;
export type Size = typeof SIZES[number];

export const STATES = ['normal', 'danger'] as const;
export type State = typeof STATES[number];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  margin-bottom: ${({ theme }) => em(theme.pulsar.size.drawer, theme.pulsar.size.room)};
`;

export const Description = styled.span`
  display: block;
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  font-size: ${({ theme }) => em(theme.pulsar.size.closet)};
  margin-top: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
`;

const country = css`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.country)};
`;

const state = css`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.state)};
`;

const city = css`
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  height: ${({ theme }) => em(theme.pulsar.size.city)};
`;

const normal = css`
  border-color: ${({ theme }) => theme.pulsar.color.input.idle.border};
`;

const danger = css`
  border-color: ${({ theme }) => theme.pulsar.color.border.danger};
`;

const focused = css`
  border-color: ${({ theme }) => theme.pulsar.color.primary.active};
`;

export const InputContainer = styled.div<{ size: Size; state: State; isFocused: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.pulsar.color.input.idle.bg};
  border: 2px solid transparent;
  color: ${({ theme }) => theme.pulsar.color.text.accent};
  overflow: hidden;
  font-size: ${({ theme }) => em(theme.pulsar.size.house)};

  ${({ theme }) =>
    transitions(['color', 'background', 'border'], `${theme.pulsar.duration.normal} ease-in-out`)};

  ${({ size }) => size === 'country' && country};
  ${({ size }) => size === 'state' && state};
  ${({ size }) => size === 'city' && city};

  ${({ state }) => state === 'normal' && normal};
  ${({ state }) => state === 'danger' && danger};

  ${({ isFocused }) => isFocused && focused};
`;

export const Input = styled.input`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  background: transparent;
  color: inherit;
  height: 100%;
  text-indent: ${({ theme }) => em(theme.pulsar.size.closet, theme.pulsar.size.room)};
  padding-right: ${({ theme }) => em(theme.pulsar.size.closet, theme.pulsar.size.room)};
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  font-weight: 700;
  ${({ theme }) => transitions(['color'], `${theme.pulsar.duration.normal} ease-in-out`)};

  ::placeholder {
    color: ${({ theme }) => theme.pulsar.color.text.placeholder};
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-left: ${({ theme }) => em(theme.pulsar.size.room)};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-right: ${({ theme }) => em(theme.pulsar.size.room)};
`;
