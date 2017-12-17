import React from 'react';
import Link from 'components/Link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLORS_NEW } from 'config';
import { rem } from 'polished';

const Title = styled.div`
  font-size: ${rem(32)};
  font-weight: bold;
  color: ${COLORS_NEW.white};
`;

const Name = styled.div`
  margin-bottom: ${rem(10)};
  font-size: ${rem(12)};
  color: ${COLORS_NEW.black};
  font-weight: bold;
  text-transform: uppercase;
`;

const Technology = styled(Link)`
  position: relative;
  padding: 20px;
  margin-bottom: ${rem(50)};
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: ${props => `url(${props.bg})`};
  background-size: cover;
  border-radius: 25px;
  box-shadow: 0px 20px 30px rgba(0, 114, 255, 0.2);
  z-index: 1;
  overflow: hidden;
  text-decoration: none;

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    content: '';
    background: linear-gradient(245.82deg, #0072FF 100%, rgba(0, 114, 255, 0.51) 44.01%, rgba(0, 195, 255, 0) 0%);
    z-index: -1;
    opacity: .4;
  }
`;

const TechnologyLink = ({ title, name = 'Technology', href, bg }) => (
  <Technology to={href} bg={bg}>
    <Name>{name}</Name>
    <Title>{title}</Title>
  </Technology>
);

TechnologyLink.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  href: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

TechnologyLink.defaultProps = {
  name: 'Technology',
};

export default TechnologyLink;
