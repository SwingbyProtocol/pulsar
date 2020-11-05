import { em } from 'polished';
import styled, { css } from 'styled-components';

export const VARIANTS = ['section-title', 'normal', 'label', 'menu'] as const;
export type Variant = typeof VARIANTS[number];

const sectionTitle = css`
  font-weight: 800;
  font-size: ${({ theme }) => em(theme.pulsar.size.state)};
  color: ${({ theme }) => theme.pulsar.color.text.normal};
  line-height: 1.25;
  text-decoration-thickness: ${({ theme }) =>
    em(theme.pulsar.size.street, theme.pulsar.size.state)};
  text-underline-offset: ${({ theme }) =>
    em(-theme.pulsar.size.street / 2, theme.pulsar.size.state)};
  text-decoration-skip: none;
  text-decoration-skip-ink: none;
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
  ${({ variant }) => variant === 'section-title' && sectionTitle};
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
