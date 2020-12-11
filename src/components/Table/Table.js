import React from 'react';
import { withTheme } from 'styled-components';
import { users } from '../../utils/data';

import Grid from '../primitives/Grid';
import Divider from '../primitives/Divider';
import User from '../User';

const Table = ({theme}) => {
  return (
    <div style={{backgroundColor: theme.color.backgroundSec, height: '85%', padding: '0 4rem'}}>
      <Grid>
        <Grid.Item xs={3}>
          <h3 
            style={{
              color: theme.color.text, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>User</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>Role</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>Status</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>Actions</h3>
        </Grid.Item>
      </Grid>
      <Divider style={{backgroundColor: theme.color.gray200}} />
      {
        users.map((user) => (
          <User key={user._id} 
            avatar={user.avatar} 
            fullName={user.name} 
            email={user.email} 
            role={user.role} 
            active={user.active} />
        ))
      }
    </div>
  );
};

export default withTheme(Table);