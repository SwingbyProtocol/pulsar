import { em, rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.pulsar.color.bg.transparent};
  z-index: 1000;
`;

export const Box = styled.div`
  background: ${({ theme }) => theme.pulsar.color.bg.normal};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  box-shadow: ${({ theme }) => theme.pulsar.shadow.card};
  width: calc(100vw - ${({ theme }) => em(theme.pulsar.size.street * 2)});
  max-height: calc(100vh - ${({ theme }) => em(theme.pulsar.size.street * 2)});
  min-height: ${({ theme }) => em(theme.pulsar.size.street)};
  border-radius: ${({ theme }) => em(theme.pulsar.size.street)};

  @media (min-width: ${rem(600)}) {
    height: auto;
    width: 50vw;
    max-height: 75vh;
    max-width: ${em(500)};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: ${({ theme }) => em(-theme.pulsar.size.street / 3)};
  right: 0;
`;
