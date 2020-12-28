import styled, { css } from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

const interactive = css`
  :hover,
  :active {
    ${ListItem.Content} {
      color: ${({ theme }) => theme.pulsar.color.primary.normal};
    }
  }
`;

export const StyledListItem = styled(ListItem)`
  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  height: ${({ theme }) => em(theme.pulsar.size.state, theme.pulsar.size.room)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.closet, theme.pulsar.size.room)};

  ${ListItem.Content} {
    font-weight: 700;
  }

  ${({ interactive: isInteractive }) => isInteractive && interactive};
`;
