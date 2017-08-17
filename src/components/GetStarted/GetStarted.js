import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage, IntlProvider, injectIntl } from 'react-intl';
import flatten from 'flat';

import { COLORS } from '@skycoin/config';
import Button from '@skycoin/button';
import Buy from '@skycoin/buy';
import Container from '@skycoin/container';
import Heading from '@skycoin/heading';
import { media } from '@skycoin/utils';

import * as locales from './locales';

const Wrapper = styled.div`
  background-color: ${COLORS.gray[0]};
  text-align: center;

  ${media.md.css`
    text-align: left;
  `}
`;

const Buttons = styled.div`
  ${media.md.css`
    text-align: right;
  `}
`;

// TODO: move to @skycoin/get-started
const GetStarted = ({ intl }) => (
  <IntlProvider messages={flatten(locales[intl.locale])}>
    <Wrapper>
      <Container>
        <Flex align="center" py={[6, 6, 10]} wrap>
          <Box width={[1 / 1, 1 / 1, 1 / 2]}>
            <Heading
              heavy
              as="h2"
              fontSize={[4, 5, 6]}
              mb={[6, 6, 0]}
              color="black"
            >
              <FormattedMessage id="heading" />
            </Heading>
          </Box>

          <Box width={[1 / 1, 1 / 1, 1 / 2]}>
            <Buttons>
              <Buy color="white" bg="violet.5" big fontSize={[1, 3]}>
                <FormattedMessage id="buy" />
              </Buy>

              <Button
                outlined
                big
                to="downloads"
                color="violet.5"
                ml={[2, 5]}
                fontSize={[1, 3]}
              >
                <FormattedMessage id="wallet" />
              </Button>
            </Buttons>
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  </IntlProvider>
);

GetStarted.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default injectIntl(GetStarted);
