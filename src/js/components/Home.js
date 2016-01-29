// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from './DocsArticle';

export default class Home extends Component {

  render () {
    return (
      <DocsArticle title="Grommet Index" colorIndex="light-1">

        <p>Grommet Index provides additional components beyond the base Grommet
          components for use in data heavy environments. If you have large
          amounts of data that needs searching, filtering, sorting, etc. then
          Grommet Index can help.</p>

      </DocsArticle>
    );
  }
}
