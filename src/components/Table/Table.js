import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import User from '../../resources/images/UserProfile.png';
import { users } from '../../utils/data';
import { paginate } from '../../utils/paginate';
import useToasts from "../../hooks/useToasts";
import { Plus, DownArrow, UpArrow } from '../../Icons';

import PlusButton from '../primitives/PlusButton';
import Pagination from '../primitives/Pagination';
import Grid from '../primitives/Grid';
import Divider from '../primitives/Divider';
import Users from '../Users';
import Text from '../primitives/Text';
import AddUserModal from '../Modals/AddUserModal';
import DeleteUserModal from '../Modals/DeleteUserModal';
import Select from '../primitives/Select';

const PER_PAGE = [{ label: 5, value: 5 }, { label: 10, value: 10 }, { label: 15, value: 15 }];

const Table = ({theme}) => {
  const [addToast, renderToasts] = useToasts();

  const [userList, setUserList] = useState(users);
  const [userToDelete, setUserToDelete] = useState(null);
  const [curPage, setCurPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortList, setSortList] = useState({ path: "fullName", order: "asc" });

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const getPagedData = () => {
    const sorted = _.orderBy(userList, [sortList.path], [sortList.order]);
    const users = paginate(sorted, curPage, itemsPerPage);
    return users;
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };

  // order change
  const handleOrderChange = (path) => {
    if(sortList.order === 'asc'){
      setSortList({path, order: 'desc'});
    }else{
      setSortList({path, order: 'asc'});
    }
  };

  // user add
  const handleUserAdd = (data) => {
    const fullName = data.first_name + data.last_name;
    const newUser = {_id: getRandomInt(1000), 
      avatar: User, name: fullName, email: data.email, role: data.role, status: true};
    setUserList((prevUsers) => 
      [newUser, ...prevUsers]);
    addToast('success', `${fullName} has been added!`);
  };

  // user delete
  const handleUserDelete = () => {
    const newUsers = userList.filter((user) => user._id !== userToDelete._id);
    setUserList(newUsers);
    addToast('error', `${userToDelete.fullName} has been deleted!`);
  };

  // pagination controll
  const handlePageChange = (newPage) => {
    setCurPage(newPage);
  };

  const handlePrevPage = () => {
    setCurPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    setCurPage((prevPage) => prevPage + 1);
  };

  // modals open
  const handleAddModalOpen = () => {
    setAddModalOpen(true);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };

  //render modals
  const renderAddUserModal = () => (
    <AddUserModal
      isOpen={addModalOpen}
      onClose={() => setAddModalOpen(false)}
      onUserAdd={handleUserAdd}
    />
  );

  const renderDeleteUserModal = () => (
    <DeleteUserModal
      isOpen={deleteModalOpen}
      onClose={() => setDeleteModalOpen(false)}
      userToDelete={userToDelete}
      onUserDelete={handleUserDelete}
    />
  );
  
  return (
    <div style={{backgroundColor: theme.color.backgroundSec, height: '85%', padding: '0 4rem'}}>
      <PlusButton onClick={() => handleAddModalOpen()}>
        <Plus />
      </PlusButton>
      <Grid>
        <Grid.Item xs={1} />
        <Grid.Item xs={4}>
          <h3 
            onClick={() => handleOrderChange('fullName')}
            style={{
              color: theme.color.text, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold, cursor: 'pointer'
            }}>User {(sortList.path === 'fullName' && sortList.order === 'asc') ? 
              <DownArrow color={theme.color.text} /> : <UpArrow color={theme.color.text} />}</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 
            onClick={() => handleOrderChange('role')}
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold, 
              cursor: 'pointer'
            }}>Role {(sortList.path === 'role' && sortList.order === 'asc') ? 
              <DownArrow color={theme.color.textSecondary} /> : <UpArrow color={theme.color.textSecondary} />}</h3>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'center'}}>
          <h3 
            onClick={() => handleOrderChange('status')}
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold, 
              cursor: 'pointer'
            }}>Status {(sortList.path === 'status' && sortList.order === 'asc') ? 
              <UpArrow color={theme.color.textSecondary} /> : <DownArrow color={theme.color.textSecondary} />}</h3>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'flex-end'}}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold, 
              cursor: 'pointer'
            }}>Actions</h3>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs={1} style={{padding: 0}} />
        <Grid.Item xs={11} style={{padding: 0}}>
          <Divider style={{backgroundColor: theme.color.divideBg, height: 2}} />
        </Grid.Item>
      </Grid>
      <Users data={getPagedData()} 
        onDeleteModalOpen={handleDeleteModalOpen} 
        setUserToDelete={setUserToDelete} 
      />
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '3rem'}}>
        <Text>
          Records on Page
          <Select options={PER_PAGE} onChange={(e) => setItemsPerPage(e.target.value)} />
        </Text>
        <Pagination
          itemsCount={userList.length}
          pageSize={itemsPerPage}
          currentPage={curPage}
          onPageChange={handlePageChange}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
        />
      </div>
      {addModalOpen && renderAddUserModal()}
      {deleteModalOpen && renderDeleteUserModal()}
      {renderToasts()}
    </div>
  );
};

export default withTheme(Table);