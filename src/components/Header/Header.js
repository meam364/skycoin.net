import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';
import { rem } from 'polished';

import { SPACE, COLORS_NEW } from 'config';
import Container from '../Container';
import Grid from '../Grid';
import GridColumn from '../GridColumn';
import Logo from '../Logo';
import Navigation from './components/Navigation';
import image from './images/bg.png';

const Wrapper = styled.div`
  padding: ${rem(SPACE[6])} 0;
  width: 100%;
  ${props => props.secondary && `
    height: 400px;
    background: url(${image}) no-repeat 50% 50%;
    background-size: cover;
  `}
`;

const Title = styled.h1`
  font-weight: bold;
  color: ${COLORS_NEW.white};
  margin: 0;
  margin-top: 240px;
  font-size: 40px;
  line-height: 66px;
`;

const Header = ({ white, border, secondary, title }) => (
  <Wrapper border={border} secondary={secondary}>
    <Container>
      <Flex align="center" wrap>
        <Box width={[1 / 1, 1 / 4]}>
          <Logo white={secondary || white} />
        </Box>

        <Box width={[1 / 1, 3 / 4]}>
          <Navigation white={secondary || white} />
        </Box>
      </Flex>
      {title && <Grid>
        <GridColumn width={11} offset={1}>
          <Title>{title}</Title>
        </GridColumn>
      </Grid>}
    </Container>
  </Wrapper>
);

Header.propTypes = {
  white: PropTypes.bool,
  border: PropTypes.bool,
  secondary: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  white: false,
  border: false,
  title: '',
  secondary: false,
};

export default Header;
