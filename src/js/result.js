// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
import React from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import PauseIcon from 'grommet/components/icons/base/Pause';
import PowerIcon from 'grommet/components/icons/base/Power';

export const Actions = ({direction, sectionValue})=>{
  return (
    <Box>
      <Menu size="small" inline={false} dropAlign={{right: 'right'}}>
        <Anchor icon={<PauseIcon size="small"/>}
          onClick={()=>{
            console.log(direction, sectionValue);
          }}>
          Suspend
        </Anchor>
        <Anchor icon={<PowerIcon size="small"/>}
          onClick={()=>{
            console.log(direction, sectionValue);
          }}>
          Power On
        </Anchor>
        <Anchor icon={<PowerIcon size="small"/>}
          onClick={()=>{
            console.log(direction, sectionValue);
          }}>
          Power Off
        </Anchor>
      </Menu>
    </Box>
  );
}; 

const result = {
  count: 5,
  items: [
    { uri: '/1', name: 'First', status: 'ok', state: 'completed', cpuCount: 0 },
    { uri: '/2', name: 'Second', status: 'ok', state: 'completed', cpuCount: 1 },
    { uri: '/3', name: 'Third', status: 'warning', state: 'completed', cpuCount: 5 },
    { uri: '/4', name: 'Fourth', status: 'critical', state: 'completed', cpuCount: 15 },
    { uri: '/5', name: 'Fifth', status: 'unknown', state: 'running', cpuCount: 15 }
  ],
  start: 0,
  total: 10, 
  unfilteredTotal: 20
};

export const sectionResult = {
  sections: [
    {
      count: 2,
      start: 0,
      total: 2,
      label: 'First section',
      actions: <Actions/>,
      items: [
        { uri: '/1', name: 'First', status: 'ok', state: 'completed', cpuCount: 0 },
        { uri: '/2', name: 'Second', status: 'ok', state: 'completed', cpuCount: 1 }
      ]
    },
    {
      count: 3,
      start: 2,
      total: 3,
      label: 'Second section',
      actions: <Actions/>,
      items: [
        { uri: '/3', name: 'Third', status: 'warning', state: 'completed', cpuCount: 5 },
        { uri: '/4', name: 'Fourth', status: 'critical', state: 'completed', cpuCount: 15 },
        { uri: '/5', name: 'Fifth', status: 'unknown', state: 'running', cpuCount: 15 }
      ]
    }
  ]
};

export default result;
