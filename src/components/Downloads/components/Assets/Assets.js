import React from 'react';
import DownloadsTable from 'components/DownloadsTable';

import content from './content';

const Assets = () => (
  <DownloadsTable title="downloads.assets.heading" list={content} id="assets" />
);

export default Assets;
