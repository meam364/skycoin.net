import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import { COLORS } from '@skycoin/config';
import Heading from '@skycoin/heading';
import Text from '@skycoin/text';
import Button from '@skycoin/button';
import Banner from 'components/Banner';

import nodes from './nodes.png';

const StyledFlex = styled(Flex)`
  height: 100%;
`;

const Skycoin = styled(Banner)`
  background:
    url(${nodes}) center center / cover,
    linear-gradient(-45deg, ${COLORS.base}, ${COLORS.violet[4]})
  ;
`;

export default () => (
  <Skycoin>
    <StyledFlex align="center">
      <Box width={[1 / 1, 2 / 3, 1 / 2]}>
        <Heading heavy as="h2" color="white" fontSize={[6, 7, 8]} mb={5}>
          <FormattedMessage id="skycoin.heading" />
        </Heading>

        <Text heavy color="white" fontSize={[2, 4]} mb={5}>
          <FormattedMessage id="skycoin.lead" />
        </Text>

        <Button bg="white" color="violet.5" mr={[2, 5]} big fontSize={[1, 3]}>
          <FormattedMessage id="skycoin.learn" />
        </Button>

        <Button color="white" big outlined fontSize={[1, 3]}>
          <FormattedMessage id="skycoin.buy" />
        </Button>
      </Box>
    </StyledFlex>
  </Skycoin>
);
