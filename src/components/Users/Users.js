import React from 'react';
import User from './User';

const Users = ({ data, setUser, onDeleteModalOpen, setUserToDelete }) => (
  <>
    {
      data.map((user) => (
        <User key={user._id} 
          _id={user._id}
          avatar={user.avatar} 
          firstName={user.firstName} 
          lastName={user.lastName} 
          email={user.email} 
          role={user.role} 
          isActive={user.isActive} 
          onDeleteModalOpen={onDeleteModalOpen} 
          setUserToDelete={setUserToDelete}
          user={user} 
          setUser={setUser}
        />
      ))
    }
  </>
);

export default Users;