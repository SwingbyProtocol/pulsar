import { em } from 'polished';
import styled, { css } from 'styled-components';

import { Button } from '../Button';

export const VARIANTS = ['normal', 'accent'] as const;
export type Variant = typeof VARIANTS[number];

const notAccent = css`
  background: ${({ theme }) => theme.pulsar.color.border.normal};
  border-color: transparent;
  color: ${({ theme }) => theme.pulsar.color.text.accent};
`;

export const Container = styled(Button)<{ innerVariant: Variant }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: left;
  width: 100%;
  border-radius: ${({ theme }) => em(theme.pulsar.size.box)};
  padding: 0 ${({ theme }) => em(theme.pulsar.size.closet)};
  position: relative;

  ${({ innerVariant }) => innerVariant === 'normal' && notAccent};
`;

export const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  margin-right: ${({ theme }) => em(theme.pulsar.size.closet, theme.pulsar.size.room)};
  width: calc(100% - ${({ theme }) => em(theme.pulsar.size.closet * 3 + theme.pulsar.size.room)});
  left: ${({ theme }) => em(theme.pulsar.size.closet)};
  height: 100%;
  overflow: hidden;
`;

export const Content = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: ${({ theme }) => em(theme.pulsar.size.room)};
  font-weight: 700;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
  margin-right: ${({ theme }) => em(theme.pulsar.size.closet)};
`;
