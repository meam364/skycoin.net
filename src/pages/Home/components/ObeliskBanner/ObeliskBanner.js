import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';

import Heading from '@skycoin/heading';
import Text from '@skycoin/text';
import Button from '@skycoin/button';
import Banner from 'components/Banner';

import network from './network.png';
import grid from './grid.png';

const StyledFlex = styled(Flex)`
  height: 100%;
`;

const Obelisk = styled(Banner)`
  background:
    url(${grid}) repeat,
    linear-gradient(-45deg, #373b5c, #686e96)
  ;
`;

const Graphic = styled.img.attrs({
  src: network,
})`
  max-width: 100%;
  display: block;
`;

export default () => (
  <Obelisk>
    <StyledFlex align="center">
      <Box width={[1 / 1, 2 / 3, 1 / 2]}>
        <Heading heavy as="h2" color="white" fontSize={[6, 7, 8]} mb={5}>
          <FormattedMessage id="obelisk.heading" />
        </Heading>

        <Text heavy color="white" fontSize={[2, 4]} mb={5}>
          <FormattedMessage id="obelisk.lead" />
        </Text>

        <Button bg="white" color="violet.5" mr={[2, 5]} big fontSize={[1, 3]}>
          <FormattedMessage id="obelisk.learn" />
        </Button>
      </Box>

      <Flex width={[0, 0, 1 / 2]} justify="center">
        <Box width={[2 / 3]}>
          <Graphic />
        </Box>
      </Flex>
    </StyledFlex>
  </Obelisk>
);
