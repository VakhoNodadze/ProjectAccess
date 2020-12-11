import React from 'react';
import { withTheme } from 'styled-components';
import Grid from '../primitives/Grid';
import Flex from '../primitives/Flex';

const User = ({avatar, fullName, email, role, status, theme}) => {
  return (
    <Grid>
      <Grid.Item xs={3}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Flex direction="column" center>
            <p style={{fontSize: theme.fontSize.h3}}>
              {fullName}
            </p>
            <span style={{fontFamily: theme.fonts.regular, fontSize: theme.fontSize.h3}}>{email}</span>
          </Flex>
        </div>
      </Grid.Item>
      <Grid.Item xs={3}>
        {role}
      </Grid.Item>
      <Grid.Item xs={3}>
        {status}
      </Grid.Item>
      <Grid.Item xs={3}>
                
      </Grid.Item>
    </Grid>
  );
};

export default withTheme(User);