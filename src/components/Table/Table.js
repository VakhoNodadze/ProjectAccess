import React from 'react';
import { withTheme } from 'styled-components';

import Grid from '../primitives/Grid';
import Divider from '../primitives/Divider';

const Table = ({theme}) => {
  return (
    <div style={{backgroundColor: theme.color.backgroundSec, height: '85%'}}>
      <Grid>
        <Grid.Item xs={3}>
          <h3 style={{color: theme.color.text, fontSize: theme.fontSize.h3}}>User</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 style={{color: theme.color.textSecondary, fontSize: theme.fontSize.h3}}>Role</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 style={{color: theme.color.textSecondary, fontSize: theme.fontSize.h3}}>Status</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 style={{color: theme.color.textSecondary, fontSize: theme.fontSize.h3}}>Actions</h3>
        </Grid.Item>
      </Grid>
      <Divider style={{backgroundColor: theme.color.gray200}} />
    </div>
  );
};

export default withTheme(Table);