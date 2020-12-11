import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import Grid from '../primitives/Grid';
import Flex from '../primitives/Flex';
import Avatar from '../primitives/Avatar';
import Toggler from '../primitives/ToggleSlider';

const User = ({avatar, fullName, email, role, active, theme}) => {
  const [ isActive, setIsActive ] = useState(active);
  return (
    <Grid>
      <Grid.Item xs={3}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Avatar avatar={avatar} />
          <Flex direction="column" align="flex-start">
            <p style={{fontSize: theme.fontSize.h3}}>
              {fullName}
            </p>
            <span style={{fontFamily: theme.fonts.light, fontSize: theme.fontSize.h3}}>{email}</span>
          </Flex>
        </div>
      </Grid.Item>
      <Grid.Item xs={3}>
        {role}
      </Grid.Item>
      <Grid.Item xs={3}>
        <Toggler isChecked={isActive} onChange={() => setIsActive((prevState) => !prevState)} />
      </Grid.Item>
      <Grid.Item xs={3}>
                
      </Grid.Item>
    </Grid>
  );
};

export default withTheme(User);