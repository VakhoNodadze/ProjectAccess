import React from 'react';
import { Selector, Option } from './styled';

const Select = ({
  width, name, register, options, errors, validate, ...props
}) => {
  const error = errors[name];
  return (
    <Selector name={name} width={width} error={error} ref={register} {...props}>
      {options.map((option) => <Option key={option.value + Math.random()} value={option.value}>{option.label}</Option>)}
    </Selector>
  );
};

export default Select;
