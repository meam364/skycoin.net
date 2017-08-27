import React from 'react';
import DownloadsTable from 'components/DownloadsTable';

import content from './content';

const DownloadsRoadmap = () => (
  <DownloadsTable title="downloads.roadmap.heading" list={content} />
);

export default DownloadsRoadmap;
