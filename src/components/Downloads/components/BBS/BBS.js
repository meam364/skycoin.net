import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Link from 'components/Link';
import styled from 'styled-components';
import { COLORS_NEW } from 'config';

const StyledLink = styled(Link)`
  color: ${COLORS_NEW.primary};
`;

const BBS = () => (
  <div>
    <Container>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="downloads.bbs.heading" />
      </Heading>

      <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
        <FormattedMessage id="downloads.bbs.lead" />
      </Text>

      <p>
        <StyledLink href="https://github.com/skycoin/bbs/releases">
          <FormattedMessage id="downloads.bbs.link" />
        </StyledLink>
      </p>
      <StyledLink href="http://bbs.skycoin.net/">
        <FormattedMessage id="downloads.bbs.thin" />
      </StyledLink>
    </Container>
  </div>
);

export default BBS;
