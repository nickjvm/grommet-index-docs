// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Aggregate from 'grommet-index/components/Aggregate';

export default class AggregateDoc extends Component {

  render () {
    let example = (
      <Aggregate name="status" values={[
        { label: 'Critical', value: 'critical', count: 2 },
        { label: 'Warning', value: 'warning', count: 5 },
        { label: 'OK', value: 'ok', count: 83 },
        { label: 'Unknown', value: 'unknown', count: 10 }
      ]} type="circle" stacked={true} />
    );

    return (
      <DocsArticle title="Aggregate" colorIndex="neutral-3">

        <p>A visualization of the values for an attribute.</p>

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
