// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import DocsFooter from './DocsFooter';

//hjjs configuration
import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);

export default class DocsArticle extends Component {

  componentDidMount () {
    this._highlightCode();
  }

  componentDidUpdate () {
    this._highlightCode();
  }

  _highlightCode () {
    let nodes = document.querySelectorAll('pre code');
    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render () {
    return (
      <Article primary={true}>
        <Header size="large" pad={{horizontal: 'large'}}
          colorIndex={this.props.colorIndex}>
          <h1>{this.props.title}</h1>
        </Header>
        <Box pad={{horizontal: 'large'}}>
          {this.props.children}
        </Box>
        <DocsFooter />
      </Article>
    );
  }
}

DocsArticle.propTypes = {
  colorIndex: PropTypes.string,
  title: PropTypes.string.isRequired
};

DocsArticle.defaultProps = {
  colorIndex: 'neutral-1'
};
