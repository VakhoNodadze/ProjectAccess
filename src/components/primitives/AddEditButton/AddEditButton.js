import React from 'react';
import { StyledContainer } from './styled';

const AddEditButton = ({children, onClick, ...props}) => (
  <StyledContainer {...props} onClick={onClick}>
    {children}
  </StyledContainer>
);

export default AddEditButton;