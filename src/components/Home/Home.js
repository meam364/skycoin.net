import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl, FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';
import { rem } from 'polished';
import { COLORS_NEW } from 'config';

import Link from 'components/Link';
import TechnologyLink from 'components/TechnologyLink';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridColumn from 'components/GridColumn';
import Footer from 'components/Footer';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Exchanges from './components/Exchanges';
import skycoinImage from './images/skycoin.png';
import skywireImage from './images/skywire.png';
import arrowRight from './images/arrowRight.svg';

const Links = styled.div`
  padding-top: ${rem(90)};
  padding-bottom ${rem(240)};
`;

const StyledLink = styled(Link)`
  color: ${COLORS_NEW.black};
  font-size: ${rem(16)};
  text-decoration: none;

  img {
    vertical-align: middle;
    margin-left: 5px;
  }

  span > span {
    color: ${COLORS_NEW.gold};
    text-decoration: underline;
  }
`;

const Home = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'home.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'home.description' })}
      />
    </Helmet>

    <Hero />
    <Container>
      <Links>
        <Grid>
          <GridColumn width={6}>
            <TechnologyLink href="skywire" bg={skywireImage} title="Skywire" />
          </GridColumn>
          <GridColumn width={6}>
            <TechnologyLink href="skycoin" bg={skycoinImage} title="Skycoin" />
          </GridColumn>
        </Grid>
        <StyledLink to="architecture-overview">
          <FormattedHTMLMessage id="home.architectureLink" />
          <img src={arrowRight} alt="arrow" />
        </StyledLink>
      </Links>
    </Container>
    <Logos />
    <Exchanges />
    <Footer />
  </div>
);

Home.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Home);
