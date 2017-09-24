import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import { Flex, Box } from 'grid-styled';
import { COLORS, FONT_SIZES, SPACE, FONT_FAMILIES } from 'config';
import styled from 'styled-components';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Container from 'components/Container';

const Wrapper = styled.div`
  background-image: linear-gradient(-110deg, ${COLORS.base}, ${COLORS.violet[4]});
`;

const Description = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[3])};
  color: #fff;
  margin-bottom: ${rem(SPACE[6])};
`;

const RoadmapHeader = ({ children }) => (
  <Wrapper>
    <Container>
      <Header white />
      <Heading heavy color="white" as="h1" fontSize={[6, 7, 8]} mb={4}>
        <FormattedMessage id="roadmapPage.heading" />
      </Heading>
      <Flex>
        <Box width={[1, 1 / 2]}>
          <Description>
            <FormattedMessage id="roadmapPage.description" />
          </Description>
        </Box>
      </Flex>
    </Container>
    {children}
  </Wrapper>
);

export default RoadmapHeader;

RoadmapHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
