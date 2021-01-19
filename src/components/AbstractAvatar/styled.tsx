import styled, { css } from 'styled-components';

const darkMode = css`
  filter: saturate(0.75) brightness(0.75);
`;

export const Container = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  pointer-events: none;
  user-select: none;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.pulsar.id !== 'PulsarLight' && darkMode};
`;

export const Svg = styled.svg`
  width: 1em;
  height: 1em;
`;
