import React from 'react';
import PropTypes from 'prop-types';
import flatten from 'flat';
import values from 'lodash/values';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FlagsProvider } from 'flag';
import { IntlProvider, addLocaleData } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import ru from 'react-intl/locale-data/ru';

import { COLORS, BREAKPOINTS, SPACE, FONT_SIZES, FLAGS } from '@skycoin/config';
import Header from '@skycoin/header';
import Footer from '@skycoin/footer';

import Announcement from '../Announcement';
import GetStarted from '../GetStarted';
import Meta from '../Meta';
import Routes from '../Routes';
import ScrollToTop from '../ScrollToTop';

addLocaleData([...zh, ...ru]);

const theme = {
  colors: flatten(COLORS),
  breakpoints: values(BREAKPOINTS),
  space: SPACE,
  fontSizes: FONT_SIZES,
};

const App = ({ locale, ...props }) => (
  <FlagsProvider flags={FLAGS}>
    <IntlProvider locale={locale}>
      <ThemeProvider theme={theme}>
        <div>
          <Meta locale={locale} />
          <Announcement />
          <Header />
          <Routes {...props} />
          <GetStarted />
          <Footer />
        </div>
      </ThemeProvider>
    </IntlProvider>
  </FlagsProvider>
);

App.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Route path="/cn" render={props => <App {...props} locale="zh" />} />
        <Route path="/ru" render={props => <App {...props} locale="ru" />} />
        <Route path="/" render={props => <App {...props} locale="en" />} />
      </Switch>
    </ScrollToTop>
  </Router>
);
