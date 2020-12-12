import React from 'react';
import { Selector, Option } from './styled';

const Select = ({
  width, name, register, options, errors, validate, onChange, ...props
}) => {
  const error = errors && errors[name];
  return (
    <Selector name={name} width={width} error={error} ref={register} {...props} onChange={onChange}>
      {options?.map((option) => <Option key={option.value + Math.random()} value={option.value}>{option.label}</Option>)}
    </Selector>
  );
};

export default Select;
