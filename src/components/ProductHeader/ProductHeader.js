import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import Header from 'components/Header';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridColumn from 'components/GridColumn';
import { COLORS_NEW } from 'config';
import media from 'utils/media';

const Pos = styled.div`
  position: relative;
  height: ${rem(300)};

  ${media.sm.css`
    heiht: ${rem(380)};
  `}

  ${media.lg.css`
    height: ${rem(626)};
  `}
`;

const Wrap = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  position: absolute;
  bottom: ${rem(100)};
  width: 100%;
  left: 0;
`;

const Name = styled.div`
  text-transform: uppercase;
  color: ${COLORS_NEW.black};
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
`;

const Title = styled.div`
  color: ${COLORS_NEW.white};
  font-size: 52px;
  font-weight 700;
  line-height: 67px;
`;

const ProductHeader = props => (
  <Wrap image={props.image}>
    <Header white />
    <Container>
      <Pos>
        <Content>
          <Grid>
            <GridColumn width={12} offset={1}>
              <Name>{props.name}</Name>
              <Title>{props.title}</Title>
            </GridColumn>
          </Grid>
        </Content>
      </Pos>
    </Container>
  </Wrap>
);

export default ProductHeader;

ProductHeader.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
