import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';

import Heading from '@skycoin/heading';
import Text from '@skycoin/text';
import Button from '@skycoin/button';
import { media } from '@skycoin/utils';
import { COLORS } from '@skycoin/config';

import Banner from 'components/Banner';
import Roadmap from './components/Roadmap';
import network from './network.png';
import map from './map.png';
import grid from './grid.png';
import nodes from './nodes.png';

const Skycoin = styled(Banner)`
  background:
    url(${nodes}) center center / cover,
    linear-gradient(-45deg, ${COLORS.base}, ${COLORS.violet[4]})
  ;
`;

const Skywire = styled(Banner)`
  background:
    url(${map}) no-repeat center center / cover,
    linear-gradient(-45deg, ${COLORS.gray[1]}, ${COLORS.gray[0]})
  ;
  text-align: center;

  ${media.md.css`
    background-size: contain;
  `}
`;

const Obelisk = styled(Banner)`
  background:
    url(${grid}) repeat,
    linear-gradient(-45deg, #373b5c, #686e96)
  ;
`;

const StyledFlex = styled(Flex)`
  height: 100%;
`;

const Graphic = styled.img.attrs({
  src: network,
})`
  max-width: 100%;
  display: block;
`;

export default () => (
  <div>
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
            <FormattedMessage id="skycoin.miner" />
          </Button>
        </Box>
      </StyledFlex>
    </Skywire>

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

    <Roadmap />
  </div>
);
