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
  justify-content: center;
`;

const Logo = styled.img`
  margin-left: ${rem(30)};
  margin-right: ${rem(30)};
  margin-bottom: ${rem(60)};
`;

const Title = styled.div`
  border-top: 1px solid ${COLORS_NEW.gray};
  font-weight: bold;
  color: ${COLORS_NEW.darkGray};
  text-align: center;
  margin-bottom: ${rem(50)};
  padding-top: ${rem(60)};
`;

const Exchanges = () => (
  <Container>
    <Title>
      <FormattedMessage id="home.exchanges.title" />
    </Title>
    <Wrapper>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.cryptopia.co.nz/"
      >
        <Logo src={images.cryptopia} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://next.exchange/"
      >
        <Logo src={images.next} square />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.c2cx.com/in/trade_sky"
      >
        <Logo src={images.c2cx} />
      </a>
    </Wrapper>
  </Container>
);

export default injectIntl(Exchanges);
