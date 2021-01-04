import styled from 'styled-components';

import { getStatusColor, SwapStatus } from '../../modules/swap-statuses';

export const StyledStatusIcon = styled.div<{ status: SwapStatus }>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  pointer-events: none;
  background: ${({ theme, status }) => getStatusColor({ theme, status })};
`;
