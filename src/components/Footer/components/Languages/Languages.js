import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flag } from 'flag';

const Languages = styled.div`
  list-style: none;
  margin: 0;
`;

const Language = styled.span`
  &:not(:first-of-type):before {
    content: ', '
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Languages>
    <Language><StyledLink to="/">En</StyledLink></Language>
    <Flag
      name="chinese"
      render={() => (
        <Language><StyledLink to="/cn/">Cn</StyledLink></Language>
      )}
    />
    <Flag
      name="russian"
      render={() => (
        <Language><StyledLink to="/ru/">Ru</StyledLink></Language>
      )}
    />
    <Flag
      name="korean"
      render={() => (
        <Language><StyledLink to="/ko/">Ko</StyledLink></Language>
      )}
    />
  </Languages>
);
