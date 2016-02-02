// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import List from 'grommet-index/components/List';
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

export default class ListDoc extends Component {

  render () {
    let example = (
      <List attributes={annotatedAttributes} result={result} />
    );

    return (
      <DocsArticle title="List" colorIndex="neutral-3">

        <p>A list of items.</p>

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
