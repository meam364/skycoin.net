import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Buy from 'pages/Buy';
import Distribution from 'pages/Distribution';
import DistributionEvent from 'pages/DistributionEvent';
import Wallet from 'pages/Wallet';
import Infographics from 'pages/Infographics';
import Miner from 'pages/Miner';
import NotFound from 'pages/NotFound';
import Obelisk from 'pages/Obelisk';
import Skywire from 'pages/Skywire';
import Whitepapers from 'pages/Whitepapers';

const Routes = ({ match }) => {
  const prefix = match.path === '/' ? '/' : '/:locale/';

  return (
    <Switch>
      <Route path={`${prefix}`} exact component={Home} />
      <Route path={`${prefix}buy`} exact component={Buy} />
      <Route path={`${prefix}event`} exact component={DistributionEvent} />

      <Route path={`${prefix}downloads/wallet`} exact component={Wallet} />
      <Route path={`${prefix}downloads/whitepapers`} exact component={Whitepapers} />

      <Route path={`${prefix}about/distribution`} exact component={Distribution} />
      <Route path={`${prefix}about/infographics`} exact component={Infographics} />
      <Route path={`${prefix}about/obelisk`} exact component={Obelisk} />
      <Route path={`${prefix}about/skywire`} exact component={Skywire} />
      <Route path={`${prefix}about/skywire/miner`} exact component={Miner} />

      <Redirect from={`${prefix}whitepapers.html`} to={`${prefix}whitepapers`} />
      <Redirect from={`${prefix}infographics.html`} to={`${prefix}infographics`} />
      <Redirect from={`${prefix}downloads.html`} to={`${prefix}downloads`} />
      <Redirect from={`${prefix}faq.html`} to={`${prefix}`} />
      <Redirect from={`${prefix}index.html`} to={`${prefix}`} />

      <Route path={`${prefix}*`} component={NotFound} />
    </Switch>
  );
};

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Routes;
