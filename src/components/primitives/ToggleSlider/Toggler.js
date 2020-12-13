import React from 'react';
import PropTypes from 'prop-types';
import { Label, Slider } from './styled';

const Toggler = ({ isChecked, onChange, isActive }) => (
  <Label>
    <input type="checkbox" onChange={isActive ? onChange : null} checked={isChecked} />
    <Slider />
  </Label>
);

Toggler.propTypes = {
  isActive: PropTypes.bool,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

Toggler.defaultProps = {
  isChecked: false,
  isActive: true,
  onChange: null
};

export default Toggler;
