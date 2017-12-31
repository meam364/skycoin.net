import React from 'react';
import PropTypes from 'prop-types';
import { SPACE } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import Header from 'components/Header';

const Wrapper = styled.div`
  padding-bottom: ${rem(SPACE[5])};
`;

const RoadmapHeader = ({ children }) => (
  <Wrapper>
    <Header secondary title="Roadmap" />
    {children}
  </Wrapper>
);

export default RoadmapHeader;

RoadmapHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
