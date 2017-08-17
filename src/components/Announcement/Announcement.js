import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage, IntlProvider, injectIntl } from 'react-intl';
import flatten from 'flat';
import { rem } from 'polished';

import { DISTRIBUTION_START, COLORS } from '@skycoin/config';
import Link from '@skycoin/link';
import Container from '@skycoin/container';
import Text from '@skycoin/text';

import * as locales from './locales';
import megaphone from './megaphone.png';

const Wrapper = styled.div`
  background-color: ${COLORS.gray[0]};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Icon = styled.img.attrs({
  src: megaphone,
})`
  width: ${rem(32)};
`;

// TODO: move to @skycoin/announcement
const Announcement = ({ intl }) => (
  <IntlProvider messages={flatten(locales[intl.locale])}>
    <Wrapper>
      <Container>
        <StyledLink to="distribution">
          <Flex align="center">
            <Box mr={4}>
              <Icon />
            </Box>

            <Box>
              <Text color="gray.8" fontSize={[1, 3]} heavy py={4} m={0}>
                <FormattedMessage
                  id="announcement"
                  values={{
                    date: moment(DISTRIBUTION_START).locale(intl.locale).format('LL'),
                  }}
                />
              </Text>
            </Box>
          </Flex>
        </StyledLink>
      </Container>
    </Wrapper>
  </IntlProvider>
);

Announcement.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default injectIntl(Announcement);
