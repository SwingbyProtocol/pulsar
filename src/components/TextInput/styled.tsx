import styled, { css } from 'styled-components';
import { transitions, em } from 'polished';

import { PulsarConstants } from '../../modules/themes/constants';

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
  font-size: ${em(PulsarConstants.size.room)};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  margin-bottom: ${em(PulsarConstants.size.drawer, PulsarConstants.size.room)};
`;

export const Description = styled.span`
  display: block;
  color: var(--sbpulsar-color-text-normals);
  font-size: ${em(PulsarConstants.size.closet)};
  margin-top: ${em(PulsarConstants.size.box, PulsarConstants.size.room)};
`;

const country = css`
  border-radius: ${em(PulsarConstants.radius.normal)};
  height: ${em(PulsarConstants.size.country)};
`;

const state = css`
  border-radius: ${em(PulsarConstants.radius.normal)};
  height: ${em(PulsarConstants.size.state)};
`;

const city = css`
  border-radius: ${em(PulsarConstants.radius.normal)};
  height: ${em(PulsarConstants.size.city)};
`;

const normal = css`
  border-color: var(--sbpulsar-color-border-normal);
`;

const danger = css`
  border-color: var(--sbpulsar-color-border-danger);
`;

const focused = css`
  border-color: var(--sbpulsar-color-primary-normal);
`;

export const InputContainer = styled.div<{ size: Size; state: State; isFocused: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: var(--sbpulsar-color-bg-normal);
  border: 2px solid transparent;
  color: var(--sbpulsar-color-text-accent);
  overflow: hidden;
  font-size: ${em(PulsarConstants.size.house)};

  ${transitions(
    ['color', 'background', 'border'],
    `${PulsarConstants.duration.normal} ease-in-out`,
  )};

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
  text-indent: ${em(PulsarConstants.size.closet, PulsarConstants.size.room)};
  padding-right: ${em(PulsarConstants.size.closet, PulsarConstants.size.room)};
  font-size: ${em(PulsarConstants.size.room)};
  font-weight: 700;
  ${transitions(['color'], `${PulsarConstants.duration.normal} ease-in-out`)};

  ::placeholder {
    color: var(--sbpulsar-color-text-masked);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-left: ${em(PulsarConstants.size.room)};
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-right: ${em(PulsarConstants.size.room)};
`;
