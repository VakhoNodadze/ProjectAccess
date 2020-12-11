import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styled';

const Checkbox = ({ isChecked, onChange }) => (
  <StyledContainer>
    <input type="checkbox" onChange={onChange} checked={isChecked} />
    <span />
  </StyledContainer>
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  isChecked: false,
  onChange: null
};

export default Checkbox;
