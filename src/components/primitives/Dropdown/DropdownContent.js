import React from 'react';

import Collapse from '../Collapse';

const DropdownContent = ({ children, isVisible, ...rest }) => {
  return (
    <Collapse in={isVisible} {...rest}>
      <div
        // size="none"
        // borderRadius="lg"
        // boxShadow="lg"
        // maxHeight="200px"
        // overflowX="hidden"
        // overflowY="auto"
        // minWidth="220px"
        // maxWidth="440px"
        // width="100%"
      >
        {children}
      </div>
    </Collapse>
  );
};

// DropdownContent.defaultProps = {
//   position: 'absolute',
//   top: 'auto',
//   left: 'auto',
//   zIndex: 1000,
//   my: 1
// };

export default DropdownContent;
