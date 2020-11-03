import { rgba } from 'polished';
import { css } from 'styled-components';

export const hoverEffect = css`
  :focus,
  :hover,
  :active {
    background-color: ${({ theme }) => rgba(theme.pulsar.color.primary.normal, 0.06)};
  }
`;