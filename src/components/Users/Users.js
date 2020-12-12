import React from 'react';
import User from './User';

const Users = ({data}) => (
  <>
    {
      data.map((user) => (
        <User key={user._id} 
          avatar={user.avatar} 
          fullName={user.name} 
          email={user.email} 
          role={user.role} 
          active={user.active} />
      ))
    }
  </>
);

export default Users;