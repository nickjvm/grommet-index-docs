// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import History from 'grommet-index/components/History';

function hoursAgo (hours) {
  const now = new Date();
  let result = new Date(now.getTime());
  result.setHours(result.getHours() - hours);
  return result;
}

export default class HistoryDoc extends Component {

  render () {
    let example = (
      <History name="requests" series={[
        { value: 'requests', intervals: [
          { count: 2, start: hoursAgo(1), stop: hoursAgo(0) },
          { count: 1, start: hoursAgo(2), stop: hoursAgo(1) },
          { count: 4, start: hoursAgo(3), stop: hoursAgo(2) },
          { count: 1, start: hoursAgo(4), stop: hoursAgo(3) }
        ]}
      ]} type="area" />
    );

    return (
      <DocsArticle title="History" colorIndex="neutral-3">

        <p>A visualization of the change in one or more values of an attribute
          over time.</p>

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
