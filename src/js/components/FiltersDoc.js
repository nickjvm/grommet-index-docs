// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Filters from 'grommet-index/components/Filters';
import attributes from '../attributes';

// So Example has something useful to display
Filters.displayName = 'Filters';

export default class FiltersDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onSort = this._onSort.bind(this);
    this.state = {
      values: {status: ['critical', 'warning']},
      sort: 'name:asc'
    };
  }

  _onChange (values) {
    this.setState({ values: values });
  }

  _onSort (value) {
    this.setState({ sort: value });
  }

  render () {

    let menuExample = (
      <Filters attributes={attributes}
      values={this.state.values} onChange={this._onChange}
      sort={this.state.sort} onSort={this._onSort} />
    );

    let inlineExample = (
      <Filters attributes={attributes}
      values={this.state.values} onChange={this._onChange}
      sort={this.state.sort} onSort={this._onSort}
      inline={true} />
    );

    return (
      <DocsArticle title="Filters" colorIndex="neutral-3">

        <p>Combines Filter components and a sort control
          to allow formalized query manipulation.</p>

        <section>
          <h2>Options</h2>
          TBD
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Menu" code={menuExample} />
          <Example name="Inline" code={inlineExample} />
        </section>

      </DocsArticle>
    );
  }
}
