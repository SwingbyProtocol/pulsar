import { em } from 'polished';
import styled, { css } from 'styled-components';

import { reset } from '../../modules/reset';

const clickable = css`
  cursor: pointer;
`;

export const AppLogoContainer = styled.div`
  ${reset};
  display: inline-flex;

  ${({ onClick }) => !!onClick && clickable};
`;

export const AppLogoText = styled.span`
  margin-left: ${({ theme }) => em(theme.pulsar.size.box, 13)};
  font-size: ${em(13)};
  font-weight: 600;
  color: ${({ theme }) => theme.pulsar.color.primary.normal};
`;
