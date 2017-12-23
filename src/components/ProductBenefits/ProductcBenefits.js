import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { COLORS_NEW } from 'config';
import Container from 'components/Container';
import media from 'utils/media';

const Wrap = styled.div`
  background: #24272C;
  padding: 100px 0;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 42px;
  color: ${COLORS_NEW.white};
  margin-bottom: 90px;

  span > span {
    color: ${COLORS_NEW.gold};
  }

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: ${COLORS_NEW.white};
    margin-bottom: 30px;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  justify-content: center;

  ${media.lg.css`
    justify-content: flex-start;
  `};
`;

const ListItemWrap = styled.div`
  padding: 20px;
  max-width: 370px;
  width: 100%;
  box-sizing: border-box;

  ${media.lg.css`
    width: 33.33%;
    max-width: none;
  `}
`;

const ListItem = styled.div`
  min-height: 500px;
  box-shadow: inset 0 0 0 2px ${COLORS_NEW.darkGray};
  position: relative;
  padding: 10px 40px;

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: 0;
    right: 20px;
    left: 20px;
    bottom: 0;
    border-top: 2px solid #24272C;
    border-bottom: 2px solid #24272C;
  }

  &::after {
    top: 20px;
    right: 0;
    left: 0;
    bottom: 20px;
    border-left: 2px solid #24272C;
    border-right: 2px solid #24272C;
  }
`;

const Name = styled.div`
  color: ${COLORS_NEW.lightPrimary};
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 6px;
`;

const Icon = styled.div`
  width: 190px;
  height: 190px;
  margin: 0 auto 26px;
  display: block;
  background: ${props => `url(${props.src})`};
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Text = styled.div`
  color: ${COLORS_NEW.white};
  opacity: .3;
  font-size: 16px;
  line-height: 28px;
`;

const renderList = list => (
  <div>{list}</div>
);

const ProductcBenefits = props => (
  <Wrap>
    <Container>
      <Title><FormattedHTMLMessage id={props.title} /></Title>
      <List>
        {props.list.map(item => (
          <ListItemWrap>
            <ListItem>
              <Icon src={item.icon} />
              <Name><FormattedMessage id={item.name} /></Name>
              <Text><FormattedMessage id={item.text} /></Text>
              {item.list && renderList(item.list)}
            </ListItem>
          </ListItemWrap>
        ))}
      </List>
    </Container>
  </Wrap>
);

export default ProductcBenefits;

ProductcBenefits.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
