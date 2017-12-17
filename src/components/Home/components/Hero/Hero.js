import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Header from 'components/Header';
import Introduction from './components/Introduction';

const Wrapper = styled.div`
`;

const Hero = () => (
  <Wrapper>
    <Header />
    <Container>
      <Introduction />
    </Container>
  </Wrapper>
);

export default Hero;
