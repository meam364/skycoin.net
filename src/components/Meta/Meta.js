import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// TODO: move to @skycoin/meta
const Meta = ({ locale }) => (
  <Helmet titleTemplate="%s &middot; Skycoin">
    <html lang={locale} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8481eb" />
    <meta name="apple-mobile-web-app-title" content="Skycoin" />
    <meta name="application-name" content="Skycoin" />
    <meta name="theme-color" content="#ffffff" />
  </Helmet>
);

Meta.propTypes = {
  locale: PropTypes.string.isRequired,
};
