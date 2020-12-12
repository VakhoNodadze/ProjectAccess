import React from 'react';
import { withTheme } from 'styled-components';
import { useForm } from "react-hook-form";

import Form from '../primitives/Form';
import Modal from '../primitives/Modal';
import Grid from '../primitives/Grid';
import Button from '../primitives/Button';
import { Face, Email, Key } from '../../Icons';
import { required } from '../../utils/validator';


const AddUserModal = ({ isOpen, onClose, theme }) => {
  const { handleSubmit } = useForm();
  const method = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };
    
  return (
    <Modal 
      isOpen={isOpen}
      onClose={() => onClose(false)}>
      <Modal.Content>
        <h1 style={{color: theme.color.text, fontSize: theme.fontSize.h1, textAlign: 'center'}}>Invite New Users</h1>
        {/* <FormContext {...method}> */}
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Item xs={2}>
              <Face />
            </Grid.Item>
            <Grid.Item xs={5}>
              <Form.Field>
                <Form.Input name="first_name" label="*First Name" validate={required} />
              </Form.Field>
            </Grid.Item>
            <Grid.Item xs={5}>
              <Form.Field>
                <Form.Input name="last_name" label="*Last Name" validate={required} />
              </Form.Field>
            </Grid.Item>
          </Grid>
          <Button
            fluid
            size="small"
            color="primary"
            variant="contained"
            disabled={true}
          >
                Send Invitation
          </Button>
        </form>
        {/* </FormContext> */}
      </Modal.Content>
    </Modal>
  );
};

export default withTheme(AddUserModal);