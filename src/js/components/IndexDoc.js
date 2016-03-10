// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Index from 'grommet-index/components/Index';
import Query from 'grommet-index/utils/Query';
import attributes from '../attributes';
import result from '../result';

let annotatedAttributes = attributes.map(attribute => {
  let attr = { ...attribute };
  if (attr.name === 'state') {
    attr.secondary = true;
  } else if (attr.name === 'modified') {
    attr.hidden = true;
  }
  return attr;
});

export default class IndexDoc extends Component {

  constructor (props) {
    super(props);
    this._onQuery = this._onQuery.bind(this);
    this._onFilter = this._onFilter.bind(this);
    this._onSort = this._onSort.bind(this);
    this.state = { query: new Query(''), filter: {}, sort: 'name:asc' };
  }

  _onQuery (query) {
    this.setState({ query: query });
  }

  _onFilter (filter) {
    this.setState({ filter: filter });
  }

  _onSort (sort) {
    this.setState({ sort: sort });
  }

  render () {
    let example = (
      <Index label="Items" attributes={annotatedAttributes} result={result}
        query={this.state.query} onQuery={this._onQuery}
        filter={this.state.filter} onFilter={this._onFilter}
        sort={this.state.sort} onSort={this._onSort}
        fixed={false} />
    );

    return (
      <DocsArticle title="Index" colorIndex="neutral-3">

        <p>Combines index header and one of the result formats.</p>

        <section>
          <h2>Options</h2>
          TBD
        </section>

        <section>
          <h2>Example</h2>
          <Example code={example} />
        </section>

      </DocsArticle>
    );
  }
}
