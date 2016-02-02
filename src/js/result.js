// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

const result = {
  count: 5,
  items: [
    { uri: '/1', name: 'First', status: 'ok', state: 'completed' },
    { uri: '/2', name: 'Second', status: 'ok', state: 'completed' },
    { uri: '/3', name: 'Third', status: 'warning', state: 'completed' },
    { uri: '/4', name: 'Fourth', status: 'critical', state: 'completed' },
    { uri: '/5', name: 'Fifth', status: 'unknown', state: 'running' }
  ],
  start: 0,
  total: 10,
  unfilteredTotal: 20
};

export default result;
