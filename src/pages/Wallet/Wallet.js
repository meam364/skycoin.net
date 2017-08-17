import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { IntlProvider, injectIntl } from 'react-intl';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import flatten from 'flat';

import { COLORS } from '@skycoin/config';
import Container from '@skycoin/container';
import Heading from '@skycoin/heading';
import Text from '@skycoin/heading';
import Downloads from './components/Downloads';

import { version } from './downloads';
import * as locales from './locales';

const Wrapper = styled.div`
  border-top: 2px solid ${COLORS.gray[1]};
`;

const Wallet = ({ intl }) => (
  <IntlProvider messages={flatten(locales[intl.locale])}>
    <div>
      <Helmet>
        <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'downloads.description' })}
        />
      </Helmet>

      <Wrapper>
        <Container>
          <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
            <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
              <FormattedMessage id="downloads.wallet.heading" />
            </Heading>

            <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
              <FormattedMessage id="downloads.wallet.lead" />
            </Text>

            <Text fontSize={[3, 3, 4]} color="gray.9" heavy>
              <FormattedMessage id="downloads.wallet.build" values={{ version }} />
            </Text>
          </Box>

          <Downloads />
        </Container>
      </Wrapper>
    </div>
  </IntlProvider>
);

Wallet.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Wallet);
