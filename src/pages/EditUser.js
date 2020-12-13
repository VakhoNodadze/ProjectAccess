import React, { useContext } from 'react';
import Flex from '../components/primitives/Flex';
import { withTheme } from 'styled-components';
import { StateContext } from '../App';

import Grid from '../components/primitives/Grid';
import UserData from '../components/UserData';

const EditUser = ({ theme}) => {

  const { user } = useContext(StateContext);

  return (
    <>
      {
        user ? 
          <Flex direction="column" full>
            <Grid style={{padding: "4rem 4rem 0 4rem", maxWidth: '100%'}}>
              <Grid.Item xs={1} />
              <Grid.Item xs={6}>
                <h1 style={{color: theme.color.text, fontSize: theme.fontSizes.h1}}>User Setup</h1>
              </Grid.Item>
            </Grid>
            <UserData />
          </Flex>
          : <h1 
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            You haven't chosen any users yet!
          </h1>
      }
    </>
  );
};

export default withTheme(EditUser);