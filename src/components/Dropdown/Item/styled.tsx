import styled from 'styled-components';
import { em } from 'polished';

import { ListItem } from '../../ListItem';

export const StyledListItem = styled(ListItem)`
  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  height: ${({ theme }) => em(theme.pulsar.size.city, theme.pulsar.size.room)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.closet, theme.pulsar.size.room)};
`;
