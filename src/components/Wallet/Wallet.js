import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';

import GetStarted from 'components/GetStarted';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wallet from './components/Wallet';

const Downloads = ({ intl }) => (
  <div>
    <Helmet>
      <title>{intl.formatMessage({ id: 'wallet.title' })}</title>
      <meta
        name="description"
        content={intl.formatMessage({ id: 'wallet.description' })}
      />
    </Helmet>
    <Header />

    <Wallet />

    <GetStarted />
    <Footer />
  </div>
);

Downloads.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(Downloads);
