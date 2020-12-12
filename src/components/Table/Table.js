import React, { useState } from 'react';
import { withTheme } from 'styled-components';

import User from '../../resources/images/UserProfile.png';
import { users } from '../../utils/data';
import { paginate } from '../../utils/paginate';
import useToasts from "../../hooks/useToasts";

import Pagination from '../primitives/Pagination';
import Grid from '../primitives/Grid';
import Divider from '../primitives/Divider';
import Users from '../Users';
import Text from '../primitives/Text';
import AddUserModal from '../AddUserModal';
import Select from '../primitives/Select';

const Table = ({theme}) => {
  const [addToast, renderToasts] = useToasts();

  const [userList, setUserList] = useState(users);
  const [curPage, setCurPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortList, setSortList] = useState({ path: "User", order: "asc" });

  const [openAddModal, setOpenAddModal] = useState(false);

  const getPagedData = () => {


    const sorted = _.orderBy(userList, [sortList.path], [sortList.order]);

    const users = paginate(sorted, curPage, itemsPerPage);

    return users;
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };
  const handleAddUser = (data) => {
    const fullName = data.first_name + data.last_name;
    const newUser = {_id: getRandomInt(1000), 
      avatar: User, name: fullName, email: data.email, role: data.role, active: true};
    setUserList((prevUsers) => 
      [...prevUsers, newUser]);
    addToast('success', `${fullName} has been added!`);
  };

  const handlePageChange = (newPage) => {
    setCurPage(newPage);
  };

  const handlePrevPage = () => {
    setCurPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    setCurPage((prevPage) => prevPage + 1);
  };

  const handleAddModalOpen = () => {
    setOpenAddModal(true);
  };

  //render modal
  const renderAddUserModal = () => (
    <AddUserModal
      isOpen={openAddModal}
      onClose={() => setOpenAddModal(false)}
      onAddUser={handleAddUser}
    />
  );
  
  return (
    <div style={{backgroundColor: theme.color.backgroundSec, height: '85%', padding: '0 4rem'}}>
      <button onClick={() => handleAddModalOpen()}>Open Modal</button>
      <Grid>
        <Grid.Item xs={1} />
        <Grid.Item xs={4}>
          <h3 
            style={{
              color: theme.color.text, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>User</h3>
        </Grid.Item>
        <Grid.Item xs={3}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>Role</h3>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'center'}}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>Status</h3>
        </Grid.Item>
        <Grid.Item xs={2} style={{alignItems: 'flex-end'}}>
          <h3 
            style={{
              color: theme.color.textSecondary, fontSize: theme.fontSize.h3, fontFamily: theme.fonts.semibold
            }}>Actions</h3>
        </Grid.Item>
      </Grid>
      <Grid>
        <Grid.Item xs={1} style={{padding: 0}} />
        <Grid.Item xs={11} style={{padding: 0}}>
          <Divider style={{backgroundColor: theme.color.divideBg, height: 2}} />
        </Grid.Item>
      </Grid>
      <Users data={getPagedData()} />
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '3rem'}}>
        <Text>
          Records on Page
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
      {openAddModal && renderAddUserModal()}
      {renderToasts()}
    </div>
  );
};

export default withTheme(Table);