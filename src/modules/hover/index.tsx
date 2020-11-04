import { css } from 'styled-components';

export const hoverEffect = css`
  :focus,
  :hover,
  :active {
    background-color: ${({ theme }) => theme.pulsar.color.bg.masked};
  }
`;
