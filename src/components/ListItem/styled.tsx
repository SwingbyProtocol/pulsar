import styled, { css } from 'styled-components';
import { em, transitions } from 'polished';

import { reset } from '../../modules/reset';
import { hoverEffect } from '../../modules/hover';

const interactive = css`
  cursor: pointer;
  ${hoverEffect};
`;

const disabled = css`
  opacity: 0.3;
  pointer-events: none;
`;

export const Styled = styled.button<{ interactive: boolean }>`
  ${reset};

  height: ${em(60)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.house)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  ${({ theme }) => transitions(['background', 'color', 'border'], theme.pulsar.duration.normal)};

  :hover,
  :active {
    text-decoration: none;
  }

  :disabled {
    ${disabled};
  }

  ${({ disabled: isDisabled }) => isDisabled && disabled};
  ${({ interactive: isInteractive }) => isInteractive && interactive};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  height: 100%;
`;

export const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: left;
`;

export const Left = styled.div`
  display: flex;
  margin-right: ${({ theme }) => em(theme.pulsar.size.closet)};
`;

export const Right = styled.div`
  display: flex;
  margin-left: ${({ theme }) => em(theme.pulsar.size.closet)};
`;

export const Fixed = styled.div`
  display: flex;
  margin-left: ${({ theme }) => em(theme.pulsar.size.closet)};
`;
