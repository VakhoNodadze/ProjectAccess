import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import User from '../../resources/images/UserProfile.png';
import useToasts from "../../hooks/useToasts";
import { Plus, Key } from '../../Icons';
import UserIcon from '../../resources/images/UserProfile.png';
import { useForm } from "react-hook-form";

import AddEditButton from '../primitives/AddEditButton';
import Flex from '../primitives/Flex';
import Button from '../primitives/Button';
import Grid from '../primitives/Grid';
import ToggleSlider from '../primitives/ToggleSlider';
import Input from '../primitives/Input';
import Select from '../primitives/Select';
import Divider from '../primitives/Divider';
import Collapsible from '../primitives/Collapsible';
import Dropdown from '../primitives/Dropdown';
import useDropdown from '../../hooks/useDropdown';



const ROLES = [{ label: 'Role', value: '' }, { label: 'Admin', value: 'Admin' }, { label: 'User', value: 'User' }];

const UserData = ({ userObj, onThemeChange, isDark, theme}) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {}
  });
  const [addToast, renderToasts] = useToasts();
  const [ref, isOpen, open, close] = useDropdown();

  const [user, setUser] = useState({
    _id: 1,
    avatar: User,
    fullName: "Samantha Standford",
    email: "samantha.standford@testtask.com",
    role: "Admin",
    isActive: true
  },);
  const [showPermissionGroup1, setShowPermissionGroup1] = useState(false);


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
      <Flex direction="column" center>
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
      </Flex>
      <Button 
        style={{marginTop: '2rem', lineHeight: '14px'}}
        size="small"
        color="secondary"
        variant="contained">
        Resend Invitation
      </Button>
    </>
  );

  const renderUserDetails = () => (
    <>
      <div style={{width: '100%'}}>
        <h3 
          onClick={() => handleOrderChange('fullName')}
          style={{
            color: theme.color.text, fontSize: theme.fontSizes.h1, marginLeft: '1rem',
            fontFamily: theme.fonts.semibold, cursor: 'pointer'
          }}>Details</h3>
        <Flex margin="1rem 1rem 0 0" align="center">
          <ToggleSlider isChecked={user.isActive} onChange={() => setIsActive((prevState) => !prevState)} />
          <span style={{marginLeft: '0.8rem', fontFamily: theme.fonts.light}}>The user is {user.isActive ? <span 
            style={{fontFamily: theme.fonts.bold}}>Active</span> : 
            <span style={{fontFamily: theme.fonts.bold}}>Inactive</span>}</span>
        </Flex>
        <Input
          disabled={!user.isActive}
          errors={errors}
          register={register({ required: true })} 
          name="firstName" label="*First Name" />
        <Input 
          disabled={!user.isActive}
          errors={errors}
          register={register({ required: true })} 
          name="lastName" label="*Last Name" />
        <Select style={{marginTop: '0.75rem'}} 
          options={ROLES} register={register({ required: true })} name="role" errors={errors} width='100%' />
      </div>
      <Button
        style={{marginTop: '9.93rem', lineHeight: '1rem'}}
        size="small"
        color="primary"
        variant="contained"
        type="submit"
      >
          Save Changes
      </Button>
    </>
  );

  const renderUserPermission = () => (
    <>
      <Flex justify="space-between" align="flex-end" width="100%">
        <h3 
          onClick={() => handleOrderChange('fullName')}
          style={{
            color: theme.color.text, fontSize: theme.fontSizes.h1, marginLeft: '1rem',
            fontFamily: theme.fonts.semibold, cursor: 'pointer'
          }}>Permissions</h3>
        <span style={{color:theme.color.text, fontFamily: theme.fonts.light}}>Admin</span>
      </Flex>
      <Flex justify="space-between" width="100%" align="flex-end" margin="2rem 0 1rem 0">
        <span>Super Admin</span>
        <ToggleSlider isChecked={user.isActive} onChange={() => setIsActive((prevState) => !prevState)} />
      </Flex>
      <Divider style={{backgroundColor: theme.color.divideBg, height: 2, margin: '2rem 0'}} />
      <Dropdown 
        style={{width: '100%'}}
        isOpen={isOpen}
        onClick={open}
        header={
          <Flex justify="space-between" width="100%" align="flex-end" >
            <span>Permission Group 1</span>
            <ToggleSlider isChecked={user.isActive} onChange={() => setIsActive((prevState) => !prevState)} />
          </Flex>
        } 
        content={<h1>Testing here</h1>}/>
      <Divider style={{backgroundColor: theme.color.divideBg, height: 2, margin: '2rem 0'}} />
      <Dropdown 
        style={{width: '100%'}}
        isOpen={isOpen}
        onClick={open}
        header={
          <Flex justify="space-between" width="100%" align="flex-end" >
            <span>Permission Group 2</span>
            <ToggleSlider isChecked={user.isActive} onChange={() => setIsActive((prevState) => !prevState)} />
          </Flex>
        } 
        content={<><h1>Testing here</h1><h1>Testing here</h1><h1>Testing here</h1><h1>Testing here</h1> </>}/>
      <Divider style={{backgroundColor: theme.color.divideBg, height: 2, margin: '2rem 0'}} />  
      <Dropdown 
        style={{width: '100%'}}
        isOpen={isOpen}
        onClick={open}
        header={
          <Flex justify="space-between" width="100%" align="flex-end" >
            <span>Permission Group 3</span>
            <ToggleSlider isChecked={user.isActive} onChange={() => setIsActive((prevState) => !prevState)} />
          </Flex>
        } 
        content={<h1>Testing here</h1>}/>
      <Divider style={{backgroundColor: theme.color.divideBg, height: 2, margin: '2rem 0'}} />  
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
        <Grid.Item xs={3} style={{alignItems: 'center', justifyContent: 'flex-start'}}>
          {renderUserMainInfo()}
        </Grid.Item>
        <Grid.Item xs={4} style={{justifyContent: 'flex-start'}}>
          {renderUserDetails()}
        </Grid.Item>
        <Grid.Item xs={5} style={{justifyContent: 'flex-start'}}>
          {renderUserPermission()}
        </Grid.Item>
      </Grid>
      {renderToasts()}
    </div>
  );
};

export default withTheme(UserData);