import styled, { css } from 'styled-components';

export const VARIANTS = ['success', 'danger', 'warning', 'pending'] as const;
export type Variant = typeof VARIANTS[number];

const success = css`
  background: ${({ theme }) => theme.pulsar.color.success.normal};
`;

const danger = css`
  background: ${({ theme }) => theme.pulsar.color.danger.normal};
`;

const warning = css`
  background: ${({ theme }) => theme.pulsar.color.text.masked};
`;

const pending = css`
  background: ${({ theme }) => theme.pulsar.color.text.highlight};
`;

export const StyledStatusIcon = styled.div<{ variant: Variant }>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  pointer-events: none;

  ${({ variant }) => variant === 'success' && success};
  ${({ variant }) => variant === 'danger' && danger};
  ${({ variant }) => variant === 'warning' && warning};
  ${({ variant }) => variant === 'pending' && pending};
`;
