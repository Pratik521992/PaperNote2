import React from 'react';

import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, item, onSelect }) => {

  const index = item ? muscles.findIndex(group => group === item) + 1 : 0;
 
  const onIndexSelect = (e, index) => {
    
    onSelect(index === 0 ? '': muscles[index - 1]);
  }
  return <Paper >
    <Tabs
      value={index}
      onChange={onIndexSelect}
      indicatorColor="primary"
      textColor="primary"
      centered>
      <Tab label={'All'} />
      {muscles.map(muscle =>
        <Tab key={muscle} label={muscle} />
      )}
    </Tabs>
  </Paper>

}
