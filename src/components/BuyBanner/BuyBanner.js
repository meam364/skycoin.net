import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { FormattedMessage } from 'react-intl';

import { COLORS, SPACE } from '@skycoin/config';
import Text from '@skycoin/text';
import Container from '@skycoin/container';
import BuyButtons from '@skycoin/buy-buttons';
import { media } from '@skycoin/utils';

const Wrapper = styled.div`
  background-color: ${COLORS.gray[1]};
  text-align: center;
  padding: ${rem(SPACE[4])} 0;

  ${media.md.css`
    padding: ${rem(SPACE[6])} 0;
  `}
`;

// TODO: move to @skycoin/buy-banner
export default () => (
  <Wrapper>
    <Container>
      <Text heavy color="black" fontSize={3}>
        <FormattedMessage id="heading" />
      </Text>

      <BuyButtons />
    </Container>
  </Wrapper>
);
