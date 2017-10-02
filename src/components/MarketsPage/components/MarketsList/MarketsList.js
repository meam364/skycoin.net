import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { SPACE, COLORS, FONT_FAMILIES, FONT_SIZES } from 'config';
import Heading from 'components/Heading';
import Link from 'components/Link';

import Logo from './images/Cryptopia-Light2x.png';
import Logoc2cx from './images/c2cx-logo.png';

const Wrap = styled.div`
  margin: ${rem(SPACE[5])} 0;
`;

const List = styled.div`
  margin-bottom: ${rem(SPACE[5])};
  border-top: 1px solid ${COLORS.gray[4]};
`;

const Row = styled.div`
  border-bottom: 1px solid ${COLORS.gray[4]};
  padding: ${rem(SPACE[2])} 0;
  text-align: center;
`;

const Item = styled(Link)`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[3])};
  color: ${COLORS.blue[5]};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  img {
    max-height: 100%;
  }
`;

const MarketsList = () => (
  <Wrap>
    <Logos>
      <img src={Logo} alt="Cryptopia logo" />
      <img src={Logoc2cx} alt="C2CX logo" />
    </Logos>
    <Heading heavy as="h2" fontSize={[5, 6]} color="black" my={[4, 6]}>
      <FormattedMessage id="markets.data" />
    </Heading>
    <List>
      <Row>
        <Item target="_blank" href="https://coinmarketcap.com/currencies/skycoin/">CoinMarketCap.com</Item>
      </Row>
    </List>
    <Heading heavy as="h2" fontSize={[5, 6]} color="black" my={[4, 6]}>
      C2CX
    </Heading>
    <List>
      <Row>
        <Item href="https://www.c2cx.com/in/trade_sky" target="_blank">SKY/CNY</Item>
      </Row>
      <Row>
        <Item href="https://www.c2cx.com/in/trade_btc_sky" target="_blank">SKY/BTC</Item>
      </Row>
      <Row>
        <Item href="https://www.c2cx.com/in/trade_eth_sky" target="_blank">SKY/ETC</Item>
      </Row>
    </List>
    <Heading heavy as="h2" fontSize={[5, 6]} color="black" my={[4, 6]}>
      Cryptopia
    </Heading>
    <List>
      <Row>
        <Item href="https://www.cryptopia.co.nz/Exchange/?market=SKY_BTC">SKY/BTC</Item>
      </Row>
    </List>
    <Heading heavy as="h2" fontSize={[5, 6]} color="black" my={[4, 6]}>
      Skycoin OTC
    </Heading>
    <List>
      <Row>
        <Item>Coming soon</Item>
      </Row>
    </List>
  </Wrap>
);

export default MarketsList;
