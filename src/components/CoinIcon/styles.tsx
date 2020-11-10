import styled from 'styled-components';

export const StyledCoinIcon = styled.img`
  width: 1em;
  height: 1em;
  pointer-events: none;
  user-select: none;
`;

export const StyledPlaceholder = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${({ theme }) => theme.pulsar.color.bg.masked};
  pointer-events: none;
  user-select: none;
`;
