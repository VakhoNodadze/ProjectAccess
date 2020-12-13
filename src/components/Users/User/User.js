import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import { IconItem, Key } from '../../../Icons';
import Grid from '../../primitives/Grid';
import Flex from '../../primitives/Flex';
import Avatar from '../../primitives/Avatar';
import Toggler from '../../primitives/ToggleSlider';
import Divider from '../../primitives/Divider';

const User = ({_id, avatar, fullName, email, role, status, onDeleteModalOpen, setUserToDelete, theme}) => {
  const [ isActive, setIsActive ] = useState(status);

  const onDeleteModal = () => {
    onDeleteModalOpen();
    setUserToDelete({_id, fullName, status});
  };

  // render key
  const renderKey = () => {
    if(isActive) {
      return <div 
        style={{backgroundColor: theme.color.purple, 
          padding: '0 6px', borderRadius: '0.9rem', cursor: 'pointer',
          display: isActive ? 'flex' : 'none', alignItems: 'center', marginRight: '0.8rem'}}>
        <Key color='#fff' />
      </div>;
    } 
    return <Key color='#C6C6C6' />;
  };

  return (
    <div style={{opacity: isActive ? '1' : '0.3'}}>
      <Grid>
        <Grid.Item xs={1} style={{alignItems: 'center'}}>
          <Avatar avatar={avatar} />
        </Grid.Item>
        <Grid.Item xs={4}>
          <Flex direction="column" align="flex-start">
            <p style={{fontSize: theme.fontSize.h3, color: theme.color.text}}>
              {fullName}
            </p>
            <span style={{fontFamily: theme.fonts.light, fontSize: theme.fontSize.h3, 
              color: theme.color.text}}>{email}</span>
          </Flex>
        </Grid.Item>
        <Grid.Item xs={3}>
          <Grid>
            <Grid.Item xs={2}>
              {role === 'Admin' && renderKey()}
            </Grid.Item>
            <Grid.Item xs={2} style={{color: theme.color.text}}>
              {role}
            </Grid.Item>
          </Grid>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'center'}}>
          <Toggler isChecked={isActive} onChange={() => setIsActive((prevState) => !prevState)} />
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'flex-end'}}>
          <div style={{display: 'flex'}}>
            {isActive && <IconItem name="Settings" style={{marginRight: '1.5rem'}} />}
            <IconItem name="Garbage" onClick={() => onDeleteModal()} />
          </div>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs={1} style={{padding: 0}} />
        <Grid.Item xs={11} style={{padding: 0}}>
          <Divider style={{backgroundColor: theme.color.divideBg, height: 2}} />
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default withTheme(User);