import React from 'react';
import { StyledContainer, StyledWithContent } from './styled';

const Divider = ({ content, isHidden, size, ...rest }) => {
  if (content)
  {return (
    <StyledWithContent isHidden={isHidden} size={size} {...rest}>
      {content}
    </StyledWithContent>
  );}

  return <StyledContainer isHidden={isHidden} size={size} {...rest} />;
};

export default Divider;
