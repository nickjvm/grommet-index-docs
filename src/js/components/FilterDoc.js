// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Filter from 'grommet-index/components/Filter';

export default class FilterDoc extends Component {

  constructor () {
    super();
    this._onChangeStatus = this._onChangeStatus.bind(this);
    this._onChangeType = this._onChangeType.bind(this);
    this.state = {
      statusValues: [],
      typeValues: []
    };
  }

  _onChangeStatus (values) {
    this.setState({ statusValues: values });
  }

  _onChangeType (values) {
    this.setState({ typeValues: values });
  }

  render () {
    const statusFilter = (
      <Filter name="status" label="Status" status={true}
        choices={[
          {label: 'Critical', value: 'critical'},
          {label: 'Warning', value: 'warning'},
          {label: 'OK', value: 'ok'},
          {label: 'Unknown', value: 'unknown'}
        ]}
        values={this.state.statusValues}
        onChange={this._onChangeStatus} />
    );

    const notInlineFilter = (
      <Filter name="type" label="Software Type" inline={false} exclusive={true}
        choices={[
          {label: 'Applications', value: 'applications'},
          {label: 'BIOS', value: 'bios'},
          {label: 'Drivers', value: 'drivers'},
          {label: 'Firmware', value: 'firmware'},
          {label: 'Utility', value: 'utility'}
        ]}
        values={this.state.typeValues}
        onChange={this._onChangeType} />
    );

    return (
      <DocsArticle title="Filter" colorIndex="neutral-3">

        <p>Controls to turn on and off possible values for an attribute.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>choices     {"[{label: , value: }, ...]"}</code></dt>
            <dd>Array of possible values.</dd>
            <dt><code>exclusive   true|false</code></dt>
            <dd>Whether to allow selecting multiple choices. Defaults
              to <code>true</code>.</dd>
            <dt><code>inline      true|false</code></dt>
            <dd>Whether it should be collapsed. Defaults
              to <code>true</code>.</dd>
            <dt><code>label       {"{string}"}</code></dt>
            <dd>The label for the Filter.</dd>
            <dt><code>name        {"{string}"}</code></dt>
            <dd>The name of the attribute or property being filtered. This
              is used to uniquely identify the DOM elements.</dd>
            <dt><code>onChange    {"function ([{string}, ...]) {...}"}</code></dt>
            <dd>Function that will be called when the user makes a choice. It
              returns an array of values, suitable for feeding back into the
              <code>values</code> property.</dd>
            <dt><code>values      {"[{string}, ...]"}</code></dt>
            <dd>Array of currently set values.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Inline" code={statusFilter} />
          <Example name="Not Inline, exclusive" code={notInlineFilter} />
        </section>

      </DocsArticle>
    );
  }
}
