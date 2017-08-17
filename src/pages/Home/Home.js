import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider, injectIntl } from 'react-intl';
import flatten from 'flat';

import Roadmap from './components/Roadmap';
import Logos from './components/Logos';
import SkycoinBanner from './components/SkycoinBanner';
import SkywireBanner from './components/SkywireBanner';
import ObeliskBanner from './components/ObeliskBanner';
import * as locales from './locales';

const Home = ({ intl }) => (
  <IntlProvider messages={flatten(locales[intl.locale])}>
    <div>
      <Helmet>
        <title>{intl.formatMessage({ id: 'downloads.title' })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: 'downloads.description' })}
        />
      </Helmet>

      <SkycoinBanner />
      <SkywireBanner />
      <ObeliskBanner />
      <Roadmap />
      <Logos />
    </div>
  </IntlProvider>
);

Home.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
};

export default injectIntl(Home);
