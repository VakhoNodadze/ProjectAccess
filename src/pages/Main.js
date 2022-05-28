import React, { useState } from 'react';
import Flex from '../components/primitives/Flex';
import { withTheme } from 'styled-components';

import Grid from '../components/primitives/Grid';
import Table from '../components/Table';
import Input from '../components/primitives/Input';
import { Search } from '../Icons';

const Main = ({theme}) => {

  const [searchState, setSearchState] = useState('');

  return (
    <div className='flex-col flex w-full h-full'>
      <Grid style={{padding: "4rem 4rem 0 4rem", maxWidth: '100%'}}>
        <Grid.Item xs={1} />
        <Grid.Item xs={6}>
          <h1 style={{color: theme.color.text, fontSize: theme.fontSizes.h1}}>Project Access</h1>
        </Grid.Item>
        <Grid.Item xs={5} style={{alignItems: 'flex-end'}}>
          <Input onChange={(e) => setSearchState(e)} placeholder="Type to filter the table" rightLabel={<Search />} />
        </Grid.Item>
      </Grid>
      <Table searchState={searchState} />
    </div>
  );
};

export default withTheme(Main);