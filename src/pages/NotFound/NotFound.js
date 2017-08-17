import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { rem } from 'polished';

import { COLORS, SPACE } from '@skycoin/config';
import Heading from '@skycoin/heading';
import Button from '@skycoin/button';
import Container from '@skycoin/container';

const Wrapper = styled.div`
  text-align: center;
  padding: ${rem(SPACE[12])} 0;
  border-top: 2px solid ${COLORS.gray[1]};
`;

const NotFound = ({ intl }) => (
  <Wrapper>
    <Helmet>
      <title>{intl.formatMessage({ id: 'title' })}</title>
    </Helmet>

    <Container>
      <Heading heavy as="h1" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="heading" />
      </Heading>

      <Button to="/" color="base" outlined big fontSize={[1, 3]}>
        <FormattedMessage id="home" />
      </Button>
    </Container>
  </Wrapper>
);

NotFound.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(NotFound);
