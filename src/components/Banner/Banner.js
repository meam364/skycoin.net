import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

import Container from '@skycoin/container';

const Wrapper = styled.div`
  height: ${rem(500)};
`;

const StyledContainer = Container.extend`
  height: 100%;
`;

const Banner = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <StyledContainer>
      {children}
    </StyledContainer>
  </Wrapper>
);

Banner.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Banner;
