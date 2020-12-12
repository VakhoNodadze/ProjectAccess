import React from 'react';
import { withTheme } from 'styled-components';

import Modal from '../../primitives/Modal';
import Grid from '../../primitives/Grid';
import Text from '../../primitives/Text';
import Button from '../../primitives/Button';
import { Face } from '../../../Icons';

const DeleteUserModal = ({ isOpen, onClose, onUserDelete, userToDelete: { fullName, status }, theme }) => {
  
  const onDelete = () => {
    onUserDelete();
    onClose(false);
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => onClose(false)}>
      <Modal.Content>
        <h1 style={{color: theme.color.text, fontSize: theme.fontSize.h1, textAlign: 'center'}}>Delete User</h1>
        <Grid>
          <Grid.Item xs={2} style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
            <Face />
          </Grid.Item>
          <Grid.Item xs={5}>
            <Text>{fullName}</Text>
          </Grid.Item>
          <Grid.Item xs={5}>
            {status && <span style={{color: theme.color.textBlue}}>Active User</span> }
            {!status && <span style={{color: '#ff6666'}}>Inactive User</span>}
          </Grid.Item>
        </Grid>
        <Grid>
          <Grid.Item xs={2} />
          <Grid.Item xs={5}>
            <Button
              onClick={() => onDelete()}
              style={{backgroundColor: theme.color.red, color: theme.color.textColor, borderRadius: '3rem'}}
              size="small"
              variant="contained"
              type="submit"
            >
                Delete
            </Button>
          </Grid.Item>
        </Grid>
      </Modal.Content>
    </Modal>
  );
};

export default withTheme(DeleteUserModal);