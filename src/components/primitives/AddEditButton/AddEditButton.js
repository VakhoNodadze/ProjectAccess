import React from 'react';
import { StyledContainer } from './styled';

const AddEditButton = ({children, onClick}) => (
  <StyledContainer onClick={onClick}>
    {children}
  </StyledContainer>
);

export default AddEditButton;