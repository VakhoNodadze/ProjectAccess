import React from 'react';
import { withTheme } from 'styled-components';
import { useForm } from "react-hook-form";

import Input from '../../primitives/Input';
import Modal from '../../primitives/Modal';
import Grid from '../../primitives/Grid';
import Button from '../../primitives/Button';
import Select from '../../primitives/Select';
import { Face, Email, Key } from '../../../Icons';


const ROLES = [{ label: 'Role', value: '' }, { label: 'Admin', value: 'Admin' }, { label: 'User', value: 'User' }];

const AddUserModal = ({ isOpen, onClose, onUserAdd, theme }) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    onUserAdd(data);
    onClose(false);
  };
    
  return (
    <Modal 
      isOpen={isOpen}
      onClose={() => onClose(false)}>
      <Modal.Content>
        <h1 style={{color: theme.color.text, fontSize: theme.fontSizes.h1, textAlign: 'center'}}>Invite New Users</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Item xs={2} style={{alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: '0.75rem'}}>
              <Face />
            </Grid.Item>
            <Grid.Item xs={5}>
              <Input 
                errors={errors}
                register={register({ required: true })} 
                name="firstName" label="*First Name" />
            </Grid.Item>
            <Grid.Item xs={5}>
              <Input 
                errors={errors}
                register={register({ required: true })} 
                name="lastName" label="*Last Name" />
            </Grid.Item>
          </Grid>
          <Grid>
            <Grid.Item xs={2} style={{alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: '0.75rem'}}>
              <Email />
            </Grid.Item>
            <Grid.Item xs={10}>
              <Input 
                errors={errors}
                register={register({ required: true })} 
                name="email" label="*Email" />
            </Grid.Item>
          </Grid>
          <Grid>
            <Grid.Item xs={2} style={{alignItems: 'flex-end', justifyContent: 'flex-end', marginBottom: '0.75rem'}}>
              <Key />
            </Grid.Item>
            <Grid.Item xs={6}>
              <Select options={ROLES} register={register({ required: true })} name="role" errors={errors} width='100%' />
            </Grid.Item>
          </Grid>
          <Grid>
            <Grid.Item xs={2} />
            <Grid.Item xs={4}>
              <Button
                style={{borderRadius: '3rem'}}
                size="small"
                color="primary"
                variant="contained"
                type="submit"
              >
                Send Invitation
              </Button>
            </Grid.Item>
            <Grid.Item xs={2} />
            <Grid.Item xs={4}>
              {(errors.firstName || errors.lastName || errors.email || errors.role )&& 
              <span style={{color: '#F89797', fontFamily: theme.fonts.light, fontStyle: 'italic'}}>
                  Fill in all the fields
              </span>}
            </Grid.Item>
          </Grid>
        </form>
      </Modal.Content>
    </Modal>
  );
};

export default withTheme(AddUserModal);