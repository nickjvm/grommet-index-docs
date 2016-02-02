// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Header from 'grommet-index/components/Header';
import Query from 'grommet-index/utils/Query';
import Button from 'grommet/components/Button';
import GrommetLogo from 'grommet/components/icons/Grommet';
import AddIcon from 'grommet/components/icons/base/Add';
import attributes from '../attributes';

export default class HeaderDoc extends Component {

  constructor () {
    super();
    this._onQuery = this._onQuery.bind(this);
    this._onFilter = this._onFilter.bind(this);
    this._onSort = this._onSort.bind(this);
    this._onNav = this._onNav.bind(this);
    this._onAdd = this._onAdd.bind(this);
    this.state = {
      query: Query(''),
      filter: {},
      sort: 'name:asc'
    };
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

  _onAdd () {
    alert("Add");
  }

  _onNav () {
    alert("Nav");
  }

  render () {

    const fullExample = (
      <Header label="Items" attributes={attributes}
        query={this.state.query} onQuery={this._onQuery}
        filter={this.state.filter} onFilter={this._onFilter}
        sort={this.state.sort} onSort={this._onSort}
        navControl={<Button type="icon" onClick={this._onNav}><GrommetLogo /></Button>}
        addControl={<Button type="icon" onClick={this._onAdd}><AddIcon /></Button>} />
    );

    return (
      <DocsArticle title="Header" colorIndex="neutral-3">

        <p>Combines a main navigation control, title, search, filters, and
          add control.</p>

        <section>
          <h2>Options</h2>
          TBD
        </section>

        <section>
          <h2>Example</h2>

          <Example code={fullExample} />
        </section>

      </DocsArticle>
    );
  }
}
