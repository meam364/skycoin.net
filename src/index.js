import React from 'react';
import { render } from 'react-snapshot';

import 'moment/locale/ru';
import 'moment/locale/zh-cn';

import 'normalize.css/normalize.css';
import '@skycoin/base/skycoin.css';

import App from './components/App';

render(<App />, document.getElementById('root'));
