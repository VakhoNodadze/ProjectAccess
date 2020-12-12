import React from 'react';
import Flex from '../components/primitives/Flex';
import { withTheme } from 'styled-components';

import Grid from '../components/primitives/Grid';
import Table from '../components/Table';

const Main = ({theme}) => {
  return (
    <Flex direction="column" full>
      <Grid style={{padding: "4rem 4rem 0 4rem", maxWidth: '100%'}}>
        <Grid.Item xs={1} />
        <Grid.Item xs={6}>
          <h1 style={{color: theme.color.text, fontSize: theme.fontSize.h1}}>Project Access</h1>
        </Grid.Item>
        <Grid.Item xs={5} style={{alignItems: 'flex-end'}}>
          <p>Input here</p>
        </Grid.Item>
      </Grid>
      <Table />
    </Flex>
  );
};

export default withTheme(Main);