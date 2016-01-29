// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Docs from './components/Docs';
import Home from './components/Home';
import IndexDoc from './components/IndexDoc';
import IndexHeaderDoc from './components/IndexHeaderDoc';

export default props => {
  return (
    <Route path="/index-docs" component={Docs}>
      <IndexRoute component={Home} />
      <Route path='index' component={IndexDoc} />
      <Route path='index-header' component={IndexHeaderDoc} />
    </Route>
  );
};
