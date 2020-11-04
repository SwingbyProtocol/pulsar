import { css } from 'styled-components';
import { transitions, em } from 'polished';

import { reset } from '../reset';

export const DefaultTarget = css`
  ${reset};

  width: 100%;
  background: ${({ theme }) => theme.pulsar.components.input.idle.bg};
  border-radius: ${({ theme }) => em(theme.pulsar.size.box, theme.pulsar.size.room)};
  height: ${({ theme }) => em(theme.pulsar.size.city, theme.pulsar.size.room)};
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  cursor: pointer;
  ${({ theme }) => transitions(['background', 'color'], theme.pulsar.duration.normal)};
`;
