import { em } from 'polished';
import styled, { css } from 'styled-components';

export const VARIANTS = [
  'title-xl',
  'title-l',
  'title-m',
  'title-s',
  'normal',
  'label',
  'menu',
] as const;
export type Variant = typeof VARIANTS[number];

const titleXL = css`
  font-weight: 800;
  font-size: ${({ theme }) => em(theme.pulsar.size.country)};
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  line-height: 1.05;
  text-decoration-thickness: ${({ theme }) =>
    em(theme.pulsar.size.street, theme.pulsar.size.country)};
  text-underline-offset: ${({ theme }) =>
    em(-theme.pulsar.size.street / 2, theme.pulsar.size.country)};
  text-decoration-skip: none;
  text-decoration-skip-ink: none;
`;

const titleL = css`
  ${titleXL};
  font-size: ${({ theme }) => em(theme.pulsar.size.state)};
  line-height: 1.25;
  text-decoration-thickness: ${({ theme }) =>
    em(theme.pulsar.size.street, theme.pulsar.size.state)};
  text-underline-offset: ${({ theme }) =>
    em(-theme.pulsar.size.street / 2, theme.pulsar.size.state)};
`;

const titleM = css`
  ${titleXL};
  font-size: ${({ theme }) => em(theme.pulsar.size.city)};
  line-height: 1.25;
  text-decoration-thickness: ${({ theme }) => em(theme.pulsar.size.street, theme.pulsar.size.city)};
  text-underline-offset: ${({ theme }) =>
    em(-theme.pulsar.size.street / 2, theme.pulsar.size.city)};
`;

const titleS = css`
  ${titleXL};
  font-size: ${({ theme }) => em(theme.pulsar.size.town)};
  line-height: 1.25;
  text-decoration-thickness: ${({ theme }) => em(theme.pulsar.size.street, theme.pulsar.size.town)};
  text-underline-offset: ${({ theme }) =>
    em(-theme.pulsar.size.street / 2, theme.pulsar.size.town)};
`;

const normal = css`
  font-weight: 400;
  font-size: ${({ theme }) => em(theme.pulsar.size.house)};
  color: ${({ theme }) => theme.pulsar.color.text.masked};
  line-height: 1.5;
`;

const menu = css`
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  font-size: ${({ theme }) => em(theme.pulsar.size.closet)};
  font-weight: 400;
  line-height: 1.15;
`;

const label = css`
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  font-size: ${({ theme }) => em(theme.pulsar.size.closet)};
  font-weight: 500;
  line-height: 1.15;
`;

export const StyledText = styled.span<{ variant: Variant }>`
  text-decoration-color: ${({ theme }) => theme.pulsar.color.primary.normal};

  ${({ variant }) => variant === 'normal' && normal};
  ${({ variant }) => variant === 'title-xl' && titleXL};
  ${({ variant }) => variant === 'title-l' && titleL};
  ${({ variant }) => variant === 'title-m' && titleM};
  ${({ variant }) => variant === 'title-s' && titleS};
  ${({ variant }) => variant === 'label' && label};
  ${({ variant }) => variant === 'menu' && menu};

  > u {
    text-decoration-color: inherit;
    text-decoration-thickness: inherit;
    text-underline-offset: inherit;
    text-decoration-skip: inherit;
    text-decoration-skip-ink: inherit;
  }
`;
