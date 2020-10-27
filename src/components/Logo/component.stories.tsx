import React from 'react';
import styled from 'styled-components';

import { Logo } from './';

export default {
  title: 'Logo',
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: -0.5em;
`;

const Wrapper = styled.div`
  margin: 0.5em;
`;

const Img = styled.img`
  height: 3em;
`;

export const Default = () => (
  <Container>
    {Object.keys(Logo).map((name) => {
      const url = Logo[name as keyof typeof Logo];
      return (
        <Wrapper key={name}>
          <Img src={url} />
        </Wrapper>
      );
    })}
  </Container>
);
