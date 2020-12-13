import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import User from '../../resources/images/UserProfile.png';
import useToasts from "../../hooks/useToasts";
import { Plus, Key } from '../../Icons';
import UserIcon from '../../resources/images/UserProfile.png';

import AddEditButton from '../primitives/AddEditButton';
import Button from '../primitives/Button';
import Grid from '../primitives/Grid';
import ToggleSlider from '../primitives/ToggleSlider';

const UserData = ({ userObj, onThemeChange, isDark, theme}) => {
  const [addToast, renderToasts] = useToasts();

  const [user, setUser] = useState({
    _id: 1,
    avatar: User,
    fullName: "Samantha Standford",
    email: "samantha.standford@testtask.com",
    role: "Admin",
    isActive: true
  },);


  // user add
  const handleUserAdd = (data) => {
    const fullName = data.first_name + data.last_name;
    const newUser = {_id: getRandomInt(1000), 
      avatar: User, fullName, email: data.email, role: data.role, isActive: true};
    setUser((prevUsers) => 
      [newUser, ...prevUsers]);
    addToast('success', `${fullName} has been added!`);
  };

  // renders
  const renderUserMainInfo = () => (
    <>
      <div style={{backgroundImage: `url(${UserIcon})`, 
        height: '14.5rem', width: '14.5rem', backgroundSize: 'cover', position: 'relative'}}>
        <div 
          style={{backgroundColor: theme.color.purple, 
            padding: '0 6px', borderRadius: '0.9rem', cursor: 'pointer', position: 'absolute',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.8rem', width: '4.8rem',
            right: 0, bottom: '10%', height: '2.5rem'}}>
          <Key color='#fff' />
        </div>
      </div>
      <span style={{color: theme.color.inActiveText, margin: theme.color.text,
        fontFamily: theme.fonts.light, cursor: 'pointer'}}>Upload a Photo</span>
      <h1 style={{color: theme.color.huge, textAlign: 'center', lineHeight: '2rem '}}>Danniel Blichman</h1>
      <p style={{color: theme.color.text, fontFamily: theme.fonts.light}}>danniel.blichman@testtask.com</p>
      <Button 
        style={{marginTop: '2rem'}}
        size="small"
        color="secondary"
        variant="contained">
        Resend Invitation
      </Button>
    </>
  );

  const renderUserDetails = () => (
    <>
      <h3 
        onClick={() => handleOrderChange('fullName')}
        style={{
          color: theme.color.text, fontSize: theme.fontSizes.h1, marginLeft: '1rem',
          fontFamily: theme.fonts.semibold, cursor: 'pointer'
        }}>Details</h3>
      <div style={{display: 'flex', alignItems: 'center', marginTop: '0.5rem'}}>
        <ToggleSlider isChecked={user.isActive} onChange={() => setIsActive((prevState) => !prevState)} />
        <span style={{marginLeft: '0.8rem', fontFamily: theme.fonts.light}}>The user is {user.isActive ? <span 
          style={{fontFamily: theme.fonts.bold}}>Active</span> : 
          <span style={{fontFamily: theme.fonts.bold}}>Inactive</span>}</span>
      </div>
    </>
  );
  
  return (
    <div style={{backgroundColor: theme.color.backgroundSec, height: '85%', padding: '0 4rem'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <AddEditButton onClick={() => handleAddModalOpen()}>
          <Plus />
        </AddEditButton>
        <Button size="small"
          color="primary"
          variant="contained"
          onClick={() => onThemeChange()} style={{backgroundColor: theme.color.button}}>
        Dark Mode {isDark === 'dark' ? 'On' : 'Off'}
        </Button>
      </div>
      <Grid spacing="extraHuge">
        <Grid.Item xs={3} style={{alignItems: 'center'}}>
          {renderUserMainInfo()}
        </Grid.Item>
        <Grid.Item xs={4} style={{justifyContent: 'flex-start'}}>
          {renderUserDetails()}
        </Grid.Item>
        <Grid.Item xs={5} style={{justifyContent: 'flex-start'}}>
          <h3 
            onClick={() => handleOrderChange('role')}
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSizes.h3, fontFamily: theme.fonts.semibold, 
              cursor: 'pointer' 
            }}>Role</h3>
        </Grid.Item>
      </Grid>
      {renderToasts()}
    </div>
  );
};

export default withTheme(UserData);