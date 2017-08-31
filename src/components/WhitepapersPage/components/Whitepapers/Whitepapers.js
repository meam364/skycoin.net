import React from 'react';

import DownloadsTable from 'components/DownloadsTable';

import downloads from './downloads';


export default () => (
  <DownloadsTable list={downloads} title="downloads.whitepapers.heading" id="whitepapers" />
);
