import React from 'react';
import { Flex, Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { Flag } from 'flag';

import Text from 'components/Text';
import Heading from 'components/Heading';
import Label from 'components/Label';
import Container from 'components/Container';
import Link from 'components/Link';

import Timeline from './components/Timeline';

const Roadmap = () => (
  <Container>
    <Flex wrap>
      <Box width={[1 / 1, 1 / 2]} pr={[0, 4, 4]}>
        <Box width={[1 / 1, 1 / 1, 5 / 6]} py={[7, 8]}>
          <Heading heavy as="h2" fontSize={[5, 6]} color="black">
            <FormattedMessage id="home.roadmap.heading" />
          </Heading>

          <Flex mb={2}>
            <Link target="_blank" href="https://downloads.skycoin.net/roadmap/Skycoin-Roadmap-11x17.pdf">
              <Label>
                <FormattedMessage id="home.roadmap.link" />
              </Label>
            </Link>
          </Flex>

          <Link target="_blank" href="https://downloads.skycoin.net/roadmap/Skycoin%2BRoadmap-Mobile-2017-1-01.jpg">
            <Label>
              <FormattedMessage id="home.roadmap.mobileLink" />
            </Label>
          </Link>

          <Text heavy my={[3, 4]} fontSize={[2, 2, 3]} color="black">
            <FormattedMessage id="home.roadmap.blurb" />
          </Text>

          <Flag
            name="roadmap"
            render={() => (
              <Text heavy mb={0} fontSize={[2, 2, 3]} color="base">
                <Link to="roadmap">
                  <FormattedMessage id="home.roadmap.roadmapLink" />
                </Link>
              </Text>
            )}
          />
        </Box>
      </Box>

      <Box width={[1 / 1, 1 / 2]}>
        <Timeline />
      </Box>
    </Flex>
  </Container>
);

export default Roadmap;
