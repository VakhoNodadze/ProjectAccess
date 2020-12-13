import React from 'react';
import { Selector, Option } from './styled';

const Select = ({
  width, name, register, options, errors, validate, isActive, onChange, defaultValue, ...props
}) => {
  const error = errors && errors[name];
  return (
    <Selector name={name} width={width} error={error} ref={register} {...props} onChange={onChange}>
      {isActive ? options?.map((option) => <Option key={option.value + Math.random()} 
        selected={defaultValue === option.value}
        value={option.value}
        defaultValue={option.label === defaultValue ? defaultValue : option.value}
      >
        {option.label}</Option>) : <Option>{defaultValue}</Option>}
    </Selector>
  );
};

export default Select;
