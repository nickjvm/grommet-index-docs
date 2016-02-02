// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

const attributes = [{
  label: 'Status',
  name: 'status',
  status: true,
  filter: {
    all: true,
    values: [
      { label: 'Critical', value: 'critical' },
      { label: 'Warning', value: 'warning' },
      { label: 'OK', value: 'ok' },
      { label: 'Unknown', value: 'unknown' }
    ]
  }
}, {
  label: 'Name',
  name: 'name',
  sort: {
    direction: 'asc'
  }
}, {
  label: 'State',
  name: 'state',
  filter: {
    all: true,
    values: [
      { value: 'running' },
      { value: 'completed' }
    ]
  }
}, {
  label: 'Modified',
  name: 'modified',
  sort: {
    direction: 'desc',
    sections: [
      { label: 'Today', value: (new Date()).getTime() },
      { label: 'Yesterday', value: (new Date()).getTime() },
      { label: 'Earlier' }
    ]
  }
}];

export default attributes;
