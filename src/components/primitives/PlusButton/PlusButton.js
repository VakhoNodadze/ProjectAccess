import React from 'react';
import { StyledContainer } from './styled';

const PlusButton = ({children, onClick}) => (
  <StyledContainer onClick={onClick}>
    {children}
  </StyledContainer>
);

export default PlusButton;