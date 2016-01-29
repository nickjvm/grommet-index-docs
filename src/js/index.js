// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import '../lib/modernizr';

if (! Modernizr.flexbox ||
  ! Modernizr.rgba) {
  alert('Unfortunately, your browser appears to be too old. ' +
    'We recommend the latest version of Chrome, Firefox, Safari, or Internet Explorer. ' +
    'If you are using the latest Internet Explorer, you will need to turn off Compatibility Mode.');
}

import '../scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import history from './History';
import routes from './routes';

history.prefix('/docs/grommet-index');

function onRouteUpdate () {
  let docElements = document.querySelectorAll('.article');
  if (docElements.length > 0 && window.location.hash === '') {
    docElements[0].scrollTop = 0;
  }
};

let element = document.getElementById('content');
ReactDOM.render(
  <Router onUpdate={onRouteUpdate} routes={routes()} history={history} />,
  element);

document.body.classList.remove('loading');
