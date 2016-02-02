// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Table from 'grommet-index/components/Table';
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

export default class TableDoc extends Component {

  render () {
    let example = (
      <Table attributes={annotatedAttributes} result={result} />
    );

    return (
      <DocsArticle title="Table" colorIndex="neutral-3">

        <p>A table of items. Tables are discouraged due to their poor behavior
          on smaller devices and at smaller resolutions. List and Tiles are
          preferred.</p>

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
