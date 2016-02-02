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
      <Filter name="type" label="Software Type" inline={false}
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
          TBD
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Inline" code={statusFilter} />
          <Example name="Not Inline" code={notInlineFilter} />
        </section>

      </DocsArticle>
    );
  }
}
