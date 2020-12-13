import React, { useState } from 'react';
import { StyledContainer, StyledContent } from './styled';

const Collapsible = ({isVisible, children}) => {
  const [isShown, setIsShown] = useState(isVisible);

  return (
    <StyledContainer isVisible={isVisible}>
      {children}
    </StyledContainer>
  );
};

export default Collapsible;