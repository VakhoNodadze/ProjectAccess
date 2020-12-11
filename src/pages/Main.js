import React from 'react';
import Flex from '../components/primitives/Flex';
import { withTheme } from 'styled-components';

import Table from '../components/Table';

const Main = ({theme}) => {
  return (
    <Flex direction="column" full>
      <Flex justify="space-between" width="100%" height="15%" padding="4rem 4rem 0 4rem">
        <h1 style={{color: theme.color.text, fontSize: theme.fontSize.h1}}>Project Access</h1>
        <p>Input here</p>
      </Flex>
      <Table />
    </Flex>
  );
};

export default withTheme(Main);