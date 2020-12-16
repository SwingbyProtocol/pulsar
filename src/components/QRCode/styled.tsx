import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 1em;
  height: 1em;
  display: flex;
`;

export const QRWrapper = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    width: calc(1em - ${8 / 100}em);
    height: calc(1em - ${8 / 100}em);
  }
`;
