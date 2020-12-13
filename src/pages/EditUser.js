import React, { useState } from 'react';
import Flex from '../components/primitives/Flex';
import { withTheme } from 'styled-components';

import Grid from '../components/primitives/Grid';
import UserData from '../components/UserData';

const EditUser = ({onThemeChange, userObj, isDark, theme}) => {

  return (
    <Flex direction="column" full>
      <Grid style={{padding: "4rem 4rem 0 4rem", maxWidth: '100%'}}>
        <Grid.Item xs={1} />
        <Grid.Item xs={6}>
          <h1 style={{color: theme.color.text, fontSize: theme.fontSizes.h1}}>User Setup</h1>
        </Grid.Item>
      </Grid>
      <UserData userObj={userObj} onThemeChange={onThemeChange} isDark={isDark} />
    </Flex>
  );
};

export default withTheme(EditUser);