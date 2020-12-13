import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { StateContext } from '../../../App';

import { IconItem, Key } from '../../../Icons';
import Grid from '../../primitives/Grid';
import Flex from '../../primitives/Flex';
import Avatar from '../../primitives/Avatar';
import Toggler from '../../primitives/ToggleSlider';
import Divider from '../../primitives/Divider';

const User = ({_id, avatar, firstName, setUser, lastName, email, 
  role, isActive, onDeleteModalOpen, setUserToDelete, user,theme}) => {
  const [ isActiveState, setIsActiveState ] = useState(isActive);

  const onDeleteModal = () => {
    onDeleteModalOpen();
    setUserToDelete({_id, firstName,lastName, isActive});
  };

  const editUser = () => {
    setUser(user);
  };

  // render key
  const renderKey = () => {
    if(isActiveState) {
      return <div 
        style={{backgroundColor: theme.color.purple, 
          padding: '0 6px', borderRadius: '0.9rem', cursor: 'pointer',
          display: isActiveState ? 'flex' : 'none', alignItems: 'center', marginRight: '0.8rem'}}>
        <Key color='#fff' />
      </div>;
    } 
    return <Key color='#C6C6C6' />;
  };

  return (
    <div style={{opacity: isActiveState ? '1' : '0.3'}}>
      <Grid>
        <Grid.Item xs={1} style={{alignItems: 'center'}}>
          <Avatar avatar={avatar} />
        </Grid.Item>
        <Grid.Item xs={4}>
          <Flex direction="column" align="flex-start">
            <p style={{fontSize: theme.fontSizes.h3, color: theme.color.text}}>
              {firstName + " " + lastName}
            </p>
            <span style={{fontFamily: theme.fonts.light, fontSize: theme.fontSizes.h3, 
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
          <Toggler isChecked={isActiveState} onChange={() => setIsActiveState((prevState) => !prevState)} />
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'flex-end'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            {isActiveState && 
            <Link to="/edit">
              <IconItem name="Settings" onClick={() => editUser()} style={{marginRight: '1.5rem'}} />
            </Link>
            }
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