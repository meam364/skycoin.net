import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import Hide from 'hidden-styled';

import { SPACE, FONT_SIZES, FONT_FAMILIES, COLORS_NEW } from 'config';
import { eventInProgress } from 'components/Distribution/eventStatus';
import Link from 'components/Link';
import Buy from 'components/Buy';
import media from 'utils/media';

const Wrapper = styled.div`
  font-size: ${rem(FONT_SIZES[1])};
  padding-top: ${rem(SPACE[4])};
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  ${media.sm.css`
    font-size: ${rem(FONT_SIZES[3])};
    padding-top: 0;
    text-align: right;
  `}
`;

const StyledLink = styled(Link)`
  margin-right: ${rem(SPACE[5])};
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(16)};
  color: ${props => (props.white ? COLORS_NEW.white : COLORS_NEW.black)};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }

  ${media.sm.css`
    margin-right: 0;
    margin-left: ${rem(SPACE[7])};
  `}

  ${media.md.css`
    margin-left: 0;
    margin-right: ${rem(SPACE[7])};
  `}
`;

const InlineHide = Hide.extend`
  display: inline;
`;

const Navigation = ({ white }) => (
  <Wrapper>
    <StyledLink white={white} to="/">
      <FormattedMessage id="header.navigation.home" />
    </StyledLink>

    <StyledLink white={white} to="whitepapers">
      <FormattedMessage id="header.navigation.whitepapers" />
    </StyledLink>

    <StyledLink white={white} to="roadmap">
      <FormattedMessage id="header.navigation.roadmap" />
    </StyledLink>
    <StyledLink white={white} to="downloads">
      <FormattedMessage id="header.navigation.downloads" />
    </StyledLink>

    <StyledLink white={white} href="http://blog.skycoin.net" target="_blank">
      <FormattedMessage id="header.navigation.blog" />
    </StyledLink>

    <InlineHide xs sm>
      <Buy
        color={COLORS_NEW.trueWhite}
        gradient={!white}
        gradientFirst="#0072FF"
        gradientSecond="#00C3FF"
        bg={white && COLORS_NEW.black}
        pill
      >
        {!eventInProgress ? (
          <FormattedMessage id="header.navigation.buy" />
        ) : (
          <span>
            <FormattedMessage id="header.navigation.distributionEvent" /> &rarr;
          </span>
        )}
      </Buy>
    </InlineHide>
  </Wrapper>
);

Navigation.propTypes = {
  white: PropTypes.bool,
};

Navigation.defaultProps = {
  white: false,
};

export default Navigation;
