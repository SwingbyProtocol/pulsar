import React from 'react';
import styled from 'styled-components';

import { Icon } from '../Icon';

export default {
  title: 'Icon',
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

export const Default = () => (
  <Container>
    {Object.keys(Icon).map((iconName) => {
      const Component = Icon[iconName as keyof typeof Icon];
      return (
        <Wrapper key={iconName}>
          <Component />
        </Wrapper>
      );
    })}
  </Container>
);
