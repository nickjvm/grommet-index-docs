// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';

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
        <Header pad={{horizontal: 'medium'}}><h3>Components</h3></Header>
        {this._renderLink("/aggregate", "Aggregate")}
        {this._renderLink("/filter", "Filter")}
        {this._renderLink("/filters", "Filters")}
        {this._renderLink("/header", "Header")}
        {this._renderLink("/history", "History")}
        {this._renderLink("/index", "Index")}
        {this._renderLink("/list", "List")}
        {this._renderLink("/sort", "Sort")}
        {this._renderLink("/table", "Table")}
        {this._renderLink("/tiles", "Tiles")}
        {this._renderLink("/timestamp", "Timestamp")}

        <Header pad={{horizontal: 'medium'}}><h3>Utilities</h3></Header>
        {this._renderLink("/query", "Query")}
      </Menu>
    );
  }
}

DocsMenu.propTypes = {
  onClick: PropTypes.func
};
