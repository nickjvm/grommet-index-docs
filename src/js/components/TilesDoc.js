// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';
import Example from './Example';
import Tiles from 'grommet-index/components/Tiles';
import attributes from '../attributes';
import result from '../result';

// So Example has something useful to display
Tiles.displayName = 'Tiles';

let annotatedAttributes = attributes.map(attribute => {
  let attr = { ...attribute };
  if (attr.name === 'state') {
    attr.secondary = true;
  } else if (attr.name === 'modified') {
    attr.hidden = true;
  }
  return attr;
});

export default class TilesDoc extends Component {

  render () {
    let example = (
      <Tiles attributes={annotatedAttributes} result={result} />
    );

    return (
      <DocsArticle title="Tiles" colorIndex="neutral-3">

        <p>Tiles of items.</p>

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
