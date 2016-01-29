// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Footer from 'grommet/components/Footer';

export default class DocsFooter extends Component {

  render () {
    return (
      <Footer colorIndex={this.props.colorIndex} centered={this.props.centered}
        large={true} pad="large">
        {this.props.children}
        <div>
          This work is licensed under
          the <a href="http://creativecommons.org/licenses/by/4.0/legalcode">
            Creative Commons Attribution 4.0 International License</a>.
        </div>
      </Footer>
    );
  }
}

DocsFooter.propTypes = {
  centered: PropTypes.bool,
  colorIndex: PropTypes.string
};

DocsFooter.defaultProps = {
  centered: false
};
