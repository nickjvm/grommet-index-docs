// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Menu from 'grommet/components/Menu';

export default class DocsMenu extends Component {

  _renderLink (to, label) {
    return (
      <Link to={to} activeClassName="active"
        onClick={this.props.onClick}>{label}</Link>
    );
  }

  render () {
    return (
      <Menu direction={this.props.direction} align="start" justify="between" primary={true}>
        {this._renderLink("/index-docs/index", "Index")}
        {this._renderLink("/index-docs/index-header", "IndexHeader")}
      </Menu>
    );
  }
}

DocsMenu.propTypes = {
  onClick: PropTypes.func
};
