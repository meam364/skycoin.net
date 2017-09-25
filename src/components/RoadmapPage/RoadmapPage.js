import React, { PureComponent } from 'react';
import { keys } from 'ramda';
import Roadmap from './components/Roadmap/Roadmap';
import RoadmapHeader from './components/Header/Header';
import RoadmapFilter from './components/Filter/Filter';
import RoadmapFuture from './components/Future/Future';

import mocks from './mocks/data.json';
import mocksFuture from './mocks/future.json';

export default class RoadmapPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      roadmap: mocks.data,
      future: mocksFuture.data,
      statusFilter: 'all',
      tagsFilter: 'all',
      filtered: [],
    };

    this.mergeByYear = this.mergeByYear.bind(this);
    this.onTagsSelect = this.onTagsSelect.bind(this);
    this.onStatusSelect = this.onStatusSelect.bind(this);
  }

  componentDidMount() {
    this.getTags(this.state.roadmap);
  }

  onTagsSelect(id) {
    this.setState({ tagsFilter: id });

    if (id === 'all') {
      return this.setState({ filtered: [] });
    }

    const filtered = this.state.roadmap.filter(item => item.tags.includes(id));

    return this.setState({ filtered });
  }

  onStatusSelect(id) {
    this.setState({ statusFilter: id });

    if (id === 'all') {
      return this.setState({ filtered: [] });
    }

    if (id === 'all' && this.state.tagsFilter !== 'all') {
      this.setState({ filtered: [] });
      this.onTagsSelect(this.state.tagsFilter);
    }

    const list = this.state.filtered.length ? this.state.filtered : this.state.roadmap;

    const filtered = list.filter(item => item.status === id);

    this.getTags(filtered);

    return this.setState({ filtered });
  }

  getTags(list) {
    const tags = {};

    list.forEach((item) => {
      if (item.tags.length) {
        item.tags.forEach((tag) => {
          tags[tag] = true;
        });
      }
    });

    this.setState({
      tags,
    });
  }

  mergeByYear() {
    const list = this.state.filtered.length ? this.state.filtered : this.state.roadmap;

    return list.reduce((acc, item) => {
      const year = acc[item.year] ? acc[item.year] : [];

      return {
        ...acc,
        [item.year]: [
          ...year,
          item,
        ],
      };
    }, {});
  }

  render() {
    const years = this.mergeByYear();

    return (
      <div>
        <RoadmapHeader>
          <RoadmapFilter
            tags={keys(this.state.tags)}
            onTagsSelect={this.onTagsSelect}
            onStatusSelect={this.onStatusSelect}
          />
        </RoadmapHeader>
        <RoadmapFuture list={this.state.future} />
        <Roadmap years={years} />
      </div>
    );
  }
}
