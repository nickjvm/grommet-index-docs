// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { Link } from 'react-router';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import GrommetLogo from 'grommet/components/icons/Grommet';
import DocsMenu from './DocsMenu';

export default class Docs extends Component {

  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._onMenuOpen = this._onMenuOpen.bind(this);
    this._onMenuClick = this._onMenuClick.bind(this);
    this.state =  {};
  }

  _onResponsive (responsive) {
    this.setState({responsive: responsive});
    if ('multiple' === responsive) {
      this.setState({showMenu: true});
    }
    if ('single' === responsive) {
      this.setState({showMenu: false});
    }
  }

  _onMenuOpen () {
    this.setState({showMenu: true});
  }

  _onMenuClick () {
    if ('single' === this.state.responsive) {
      this.setState({showMenu: false});
    }
  }

  _renderTitle () {
    return (
      <Title responsive={false}>
        <Link to="/index-docs">
          <Box align="center" direction="row">
            <GrommetLogo />
          </Box>
        </Link>
      </Title>
    );
  }

  _renderMenu () {
    var title = this._renderTitle();
    var closer;
    if ('single' === this.state.responsive) {
      closer = (
        <Button type="icon" onClick={this._onMenuClick}><CloseIcon /></Button>
      );
    }
    return (
      <Sidebar size="small" primary={true} separator="right">
        <Header justify="between" size="large" pad={{horizontal: 'medium'}}>
          {title}
          {closer}
        </Header>
        <DocsMenu onClick={this._onMenuClick} />
      </Sidebar>
    );
  }

  _renderDoc () {
    var header;
    if ('single' === this.state.responsive) {
      var title = this._renderTitle();
      header = (
        <Header justify="between" large={true} pad={{horizontal: 'large'}}>
          {title}
          <Menu direction="row" responsive={false}>
            <a onClick={this._onMenuOpen}>Contents</a>
          </Menu>
        </Header>
      );
    }
    return (
      <div ref="doc" className="docs-split__doc">
        {header}
        {this.props.children}
      </div>
    );
  }

  render () {

    let menu = this._renderMenu();
    let doc = this._renderDoc();

    return (
      <App className="docs" centered={false}>
        <Split flex="right" fixed={true} onResponsive={this._onResponsive}>
          {menu}
          {doc}
        </Split>
      </App>
    );
  }
}
