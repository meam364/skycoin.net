import React from 'react';
import PropTypes from 'prop-types';
import { FONT_SIZES, FONT_FAMILIES, SPACE, COLORS } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import inProgress from './images/inProgress.svg';
import slated from './images/slated.svg';
import completed from './images/completed.svg';

const Title = styled.h4`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${FONT_SIZES[2]};
  font-weight: 700;
  margin-bottom: ${rem(SPACE[1])};
  color: ${COLORS.gray[9]};
`;

const Text = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  color: ${COLORS.gray[9]};
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: ${rem(SPACE[5])};

  &:nth-child(odd) {
    margin-right: ${props => (props.startRight ? 'auto' : 0)};
    padding-left: ${props => (!props.startRight ? rem(SPACE[11]) : 0)};
    padding-right: ${props => (props.startRight ? rem(SPACE[11]) : 0)};
    text-align: ${props => (!props.startRight ? 'left' : 'right')};

    &::before {
      left: ${props => (props.startRight ? 'auto' : '8px')};
      right: ${props => (props.startRight ? '8px' : 'auto')};
    }

    &::after {
      left: ${props => (props.startRight ? 'auto' : '-8px')};
      right: ${props => (props.startRight ? '-8px' : 'auto')};
    }
  }

  &:nth-child(even) {
    margin-left: ${props => (props.startRight ? 'auto' : 0)};
    padding-left: ${props => (props.startRight ? rem(SPACE[11]) : 0)};
    padding-right: ${props => (!props.startRight ? rem(SPACE[11]) : 0)};
    text-align: ${props => (props.startRight ? 'left' : 'right')};

    &::before {
      left: ${props => (!props.startRight ? 'auto' : '8px')};
      right: ${props => (!props.startRight ? '8px' : 'auto')};
    }

    &::after {
      left: ${props => (!props.startRight ? 'auto' : '-8px')};
      right: ${props => (!props.startRight ? '-8px' : 'auto')};
    }
  }

  &::before {
    content: '';
    width: 50px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    background: ${COLORS.indigo[4]};
  }

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: -8px;
    transform: translateY(-50%);
    background-image: url(
      ${(props) => {
        switch (props.status) {
          case 'in-progress':
            return inProgress;
          case 'slated':
            return slated;
          case 'completed':
            return completed;
          default:
            return '';
        }
      }});
  }
`;

const Tag = styled.span`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  color: ${COLORS.gray[4]};
`;

const Item = ({ body, title, tags, status, startRight }) => (
  <Wrapper status={status} startRight={startRight}>
    {title && <Title>{title}</Title>}
    <Text>{body}</Text>
    {tags.map(tag => <Tag key={tag}>#{tag} </Tag>)}
  </Wrapper>
);


Item.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
  status: PropTypes.string.isRequired,
  startRight: PropTypes.bool,
};

Item.defaultProps = {
  title: '',
  tags: [],
  startRight: true,
};

export default Item;
