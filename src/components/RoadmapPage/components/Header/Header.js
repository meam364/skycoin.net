import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { COLORS } from 'config';
import styled from 'styled-components';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Container from 'components/Container';

const Wrapper = styled.div`
  background-image: linear-gradient(-110deg, ${COLORS.base}, ${COLORS.violet[4]});
`;

const RoadmapHeader = ({ children }) => (
  <Wrapper>
    <Container>
      <Header white />
      <Heading heavy color="white" as="h1" fontSize={[6, 7, 8]} mb={8}>
        <FormattedMessage id="roadmapPage.heading" />
      </Heading>
    </Container>
    {children}
  </Wrapper>
);

export default RoadmapHeader;

RoadmapHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
