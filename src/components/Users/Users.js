import React from 'react';
import User from './User';

const Users = ({ data, onDeleteModalOpen, setUserToDelete }) => (
  <>
    {
      data.map((user) => (
        <User key={user._id} 
          _id={user._id}
          avatar={user.avatar} 
          fullName={user.fullName} 
          email={user.email} 
          role={user.role} 
          status={user.status} 
          onDeleteModalOpen={onDeleteModalOpen} 
          setUserToDelete={setUserToDelete} 
        />
      ))
    }
  </>
);

export default Users;