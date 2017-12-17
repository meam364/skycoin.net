import React from 'react';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import { COLORS_NEW } from 'config';
import Container from 'components/Container';

import * as images from './images';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Logo = styled.img`
  margin-left: ${rem(20)};
  margin-right: ${rem(20)};
  margin-bottom: ${rem(60)};
`;

const Title = styled.div`
  font-weight: bold;
  color: ${COLORS_NEW.darkGray};
  text-align: center;
  margin-bottom: ${rem(50)};
  margin-top: ${rem(60)};
`;

const Logos = () => (
  <Container>
    <Title>
      <FormattedMessage id="home.logos.title" />
    </Title>
    <Wrapper>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.forbes.com/sites/laurashin/2017/07/12/crypto-boom-15-new-hedge-funds-want-in-on-84000-returns/"
      >
        <Logo src={images.forbes} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.the-blockchain.com/2017/08/01/skycoin-launches-vision-new-internet/"
      >
        <Logo src={images.blockchainNews} square />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alphabit.fund/"
      >
        <Logo src={images.alphabit} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://cnn.com/"
      >
        <Logo src={images.CNN} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.foxnews.com/"
      >
        <Logo src={images.fox} />
      </a>
    </Wrapper>
  </Container>
);

export default injectIntl(Logos);
