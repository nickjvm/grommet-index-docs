// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';

import Section from 'grommet/components/Section';

import DocsArticle from './DocsArticle';

export default class Home extends Component {

  render () {
    return (
      <DocsArticle title="Grommet Index" colorIndex="light-1">

        <p>Grommet Index provides additional components beyond the base Grommet
          components for use in data heavy environments. If you have large
          amounts of data that needs searching, filtering, sorting, etc. then
          Grommet Index can help.</p>

        <Section primary={true}>
          <h2>Hello World</h2>

          <p>
            To help you get started quickly we provide the following <a href="http://codepen.io/grommet/pen/PNKGxN/" target="_blank">
              codepen
            </a> template:
          </p>
          <iframe height='268' scrolling='no'
            src='//codepen.io/grommet/embed/PNKGxN/?height=268&theme-id=0&default-tab=result'
            frameBorder='no' allowTransparency='true' allowFullScreen='true'
            style={{width: '100%'}}>See the Pen
            <a href='http://codepen.io/grommet/pen/PNKGxN/'>Grommet Hello World</a>
            by Grommet UX (<a href='http://codepen.io/grommet'>@grommet</a>) on
            <a href='http://codepen.io'>CodePen</a>.
          </iframe>
          <p>
            Also, there is a Github <a href="https://gist.github.com/grommetux/4b73162123b70103b763735c3ef58015"
            target="_blank">Gist</a> that you can use to load this same Hello World app in your local computer.
          </p>
        </Section>
      </DocsArticle>
    );
  }
}
