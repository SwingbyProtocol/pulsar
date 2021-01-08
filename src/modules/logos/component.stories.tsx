import React from 'react';
import styled from 'styled-components';

import { logos } from '.';

export default {
  title: 'Logos',
};

const BgContainer = styled.div`
  height: 100vh;
  background-size: contain;
  background-repeat: repeat;
`;

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
    {Object.keys(logos).map((name) => {
      const url = logos[name as keyof typeof logos];
      return (
        <Wrapper key={name}>
          <Img src={url} />
        </Wrapper>
      );
    })}
  </Container>
);

export const Stars = () => <BgContainer style={{ backgroundImage: `url(${logos.StarsBg})` }} />;
export const StarsAnimated = () => (
  <BgContainer style={{ backgroundImage: `url(${logos.StarsBgAnimated})` }} />
);

Stars.parameters = { theme: 'accent' };
StarsAnimated.parameters = { theme: 'accent' };
