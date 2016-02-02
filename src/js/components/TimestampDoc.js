// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Timestamp from 'grommet-index/components/Timestamp';

export default class TimestampDoc extends Component {

  render () {
    let example = <Timestamp value={new Date()} />;

    return (
      <DocsArticle title="Timestamp" colorIndex="neutral-3">

        <p>A localized timestamp.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align  left|right</code></dt>
            <dd>Which side to align the timestamp to.</dd>
            <dt><code>value  string|Date</code></dt>
            <dd>A Date or parseable string representation of a date and time.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          <Example code={example} />
        </section>

      </DocsArticle>
    );
  }
}
