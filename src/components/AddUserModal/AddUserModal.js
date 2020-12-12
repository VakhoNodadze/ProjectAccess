import React from 'react';
import Form from '../primitives/Form';
import Modal from '../primitives/Modal';

const AddUserModal = ({ isOpen, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onClose={() => onClose(false)}>
      <Modal.Header>
                Invite New User
      </Modal.Header>
    </Modal>
  );
};

export default AddUserModal;