import React from 'react';


const DropdownHeader = ({ children, ...rest }) => {
  return <div style={{...rest}}>{children}</div>;
};

DropdownHeader.defaultProps = {};

export default DropdownHeader;
