import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import { media } from '@skycoin/utils';
import { COLORS } from '@skycoin/config';
import Heading from '@skycoin/heading';
import Text from '@skycoin/text';
import Button from '@skycoin/button';
import Banner from 'components/Banner';

import map from './map.png';

const StyledFlex = styled(Flex)`
  height: 100%;
`;

const Skywire = styled(Banner)`
  background:
    url(${map}) no-repeat center center / cover,
    linear-gradient(-45deg, ${COLORS.gray[1]}, white)
  ;
  text-align: center;

  ${media.md.css`
    background-size: contain;
  `}
`;

export default () => (
  <Skywire>
    <StyledFlex align="center" justify="center">
      <Box width={[1 / 1, 2 / 3]}>
        <Heading heavy as="h2" color="black" fontSize={[6, 7, 8]} mb={5}>
          <FormattedMessage id="skywire.heading" />
        </Heading>

        <Text heavy color="black" fontSize={[2, 4]} mb={5}>
          <FormattedMessage id="skywire.lead" />
        </Text>

        <Button bg="base" color="white" mr={[2, 5]} big fontSize={[1, 3]}>
          <FormattedMessage id="skywire.learn" />
        </Button>

        <Button color="base" big outlined fontSize={[1, 3]}>
          <FormattedMessage id="skywire.miner" />
        </Button>
      </Box>
    </StyledFlex>
  </Skywire>
);
