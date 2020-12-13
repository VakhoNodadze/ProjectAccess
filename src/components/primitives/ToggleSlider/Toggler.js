import React from 'react';
import PropTypes from 'prop-types';
import { Label, Slider } from './styled';

const Toggler = ({ isChecked, register, onChange, name, isActive, ...props }) => (
  <Label {...props}>
    <input ref={register} name={name} type="checkbox" onChange={isActive ? onChange : null} checked={isChecked} />
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
