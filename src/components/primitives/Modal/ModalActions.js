import React from 'react';
import PropTypes from 'prop-types';

import { StyledActions } from './styled';

const ModalActions = ({ children, ...rest }) => (
  <StyledActions className="actions" {...rest}>
    {children}
  </StyledActions>
);

export default ModalActions;
