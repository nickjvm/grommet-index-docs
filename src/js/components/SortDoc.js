// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Sort from 'grommet-index/components/Sort';

// So Example has something useful to display
Sort.displayName = 'Sort';

export default class SortDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = {
      value: "name:asc"
    };
  }

  _onChange (value) {
    this.setState({ value: value });
  }

  render () {
    const sortExample = (
      <Sort attributes={[
        {label: 'Name', name: 'name'},
        {label: 'Status', name: 'status'},
        {label: 'Modified', name: 'modified'}
      ]}
        value={this.state.value}
        onChange={this._onChange} />
    );

    return (
      <DocsArticle title="Sort" colorIndex="neutral-3">

        <p>Control to specify sort attribute and direction.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>all         true|false</code></dt>
            <dd>Whether a control to select all values is shown.</dd>
          </dl>
        </section>

        <section>
          <Example name="Example" code={sortExample} />
        </section>

      </DocsArticle>
    );
  }
}
