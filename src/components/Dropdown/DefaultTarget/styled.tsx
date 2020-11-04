import { em } from 'polished';
import styled from 'styled-components';

import { reset } from '../../../modules/reset';
import { defaultTarget } from '../../../modules/target';

export const StyledDefaultTarget = styled.button`
  ${defaultTarget};
`;

export const Container = styled.div`
  ${reset};
  flex-grow: 1;
`;

export const IconContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => em(theme.pulsar.size.drawer, theme.pulsar.size.room)};
  margin: 0 ${({ theme }) => em(theme.pulsar.size.house, theme.pulsar.size.drawer)};
  color: ${({ theme }) => theme.pulsar.color.primary.normal};
`;
