import React, { useState, useEffect, useContext } from 'react';

import { withTheme } from 'styled-components';

import User from '../../resources/images/UserProfile.png';
import { generateId } from '../../utils/helpers';
import { paginate } from '../../utils/paginate';
import { Plus, DownArrow, UpArrow } from '../../Icons';
import { StateContext } from '../../App';
import useToasts from "../../hooks/useToasts";

import AddEditButton from '../primitives/AddEditButton';
import Button from '../primitives/Button';
import Pagination from '../primitives/Pagination';
import Grid from '../primitives/Grid';
import Divider from '../primitives/Divider';
import Users from '../Users';
import Text from '../primitives/Text';
import AddUserModal from '../Modals/AddUserModal';
import DeleteUserModal from '../Modals/DeleteUserModal';
import Select from '../primitives/Select';

const PER_PAGE = [{ label: 5, value: 5 }, { label: 10, value: 10 }, { label: 15, value: 15 }];

const Table = ({searchState, theme}) => {
  const { setUser, onThemeChange, isDark, userList, setUserList, addToast } = useContext(StateContext);


  // const [addToast, renderToasts] = useToasts();

  const [userToDelete, setUserToDelete] = useState(null);
  const [curPage, setCurPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortList, setSortList] = useState({ path: "fullName", order: "asc" });

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const getPagedData = () => {
    const filteredUsers = userList.filter((user) => {
      return (
        user.email.toLowerCase().indexOf(searchState.toLowerCase()) !== -1 ||
        user.firstName.toLowerCase().indexOf(searchState.toLowerCase()) !== -1 || 
        user.lastName.toLowerCase().indexOf(searchState.toLowerCase()) !== -1
      );
    });
    const sorted = _.orderBy(filteredUsers, [sortList.path], [sortList.order]);
    const users = paginate(sorted, curPage, itemsPerPage);
    return users;
  };

  useEffect(() => {
    return () => {
    };
  }, []);

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
    const { firstName, lastName, email, role } = data;
    const newUser = {
      _id: generateId(), 
      avatar: User, firstName, lastName, email, role, isActive: true, isSuper: false,
      permissionGroupOne: false,
      permissionGroupArray1: [
        true,
        true,
        true,
        false,
        true
      ],
      permissionGroupTwo: true,
      permissionGroupArray2: [
        true,
        true,
        true,
        true,
        true
      ],
      permissionGroupThree: false,
      permissionGroupArray3: [
        false,
        false,
        true,
        true,
        false
      ]};
    setUserList((prevUsers) => 
      [newUser, ...prevUsers]);
  };

  // user delete
  const handleUserDelete = () => {
    const newUsers = userList.filter((user) => user._id !== userToDelete._id);
    setUserList(newUsers);
    addToast('error', `${userToDelete.firstName + " " + userToDelete.lastName} has been deleted!`);
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
      <Grid>
        <Grid.Item xs={1} />
        <Grid.Item xs={4}>
          <h3 
            onClick={() => handleOrderChange('fullName')}
            style={{
              color: theme.color.text, fontSize: theme.fontSizes.h3, fontFamily: theme.fonts.semibold, cursor: 'pointer'
            }}>User {(sortList.path === 'fullName' && sortList.order === 'asc') ? 
              <DownArrow color={theme.color.text} /> : <UpArrow color={theme.color.text} />}</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 
            onClick={() => handleOrderChange('role')}
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSizes.h3, fontFamily: theme.fonts.semibold, 
              cursor: 'pointer' 
            }}>Role {(sortList.path === 'role' && sortList.order === 'asc') ? 
              <DownArrow color={theme.color.textSecondary} /> : <UpArrow color={theme.color.textSecondary} />}</h3>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'center'}}>
          <h3 
            onClick={() => handleOrderChange('isActive')}
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSizes.h3, fontFamily: theme.fonts.semibold, 
              cursor: 'pointer'
            }}>Status {(sortList.path === 'isActive' && sortList.order === 'asc') ? 
              <UpArrow color={theme.color.textSecondary} /> : <DownArrow color={theme.color.textSecondary} />}</h3>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'flex-end'}}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSizes.h3, fontFamily: theme.fonts.semibold, 
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
        setUser={setUser}
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
      {/* {renderToasts()} */}
    </div>
  );
};

export default withTheme(Table);