import React from 'react';
import PropTypes from 'prop-types';
import { Label, Slider } from './styled';

const Toggler = ({ isChecked, onChange }) => (
  <Label>
    <input type="checkbox" onChange={onChange} checked={isChecked} />
    <Slider />
  </Label>
);

Toggler.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

Toggler.defaultProps = {
  isChecked: false,
  onChange: null
};

export default Toggler;
