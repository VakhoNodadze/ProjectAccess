import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import Input from '../Input';
import * as icons from '../../../Icons';

import { StyledInputWrapper, StyledInputAbsoluteRight } from './styled';

export const FormInput = ({ name, validate, showValidator, compact, ...props }) => {
  const { register, errors, getValues } = useFormContext();
  const error = errors[name];
  const values = getValues();

  const { Info } = icons;

  const renderValidator = () =>
    (error ? (
      <StyledInputAbsoluteRight>
        <Info color="#ea3d53" />
      </StyledInputAbsoluteRight>
    ) : null);

  return (
    <StyledInputWrapper compact={compact}>
      <Input
        name={name}
        error={typeof error === 'object'}
        defaultValue={values[name] || ''}
        register={register({ validate })}
        {...props}
      />
      {showValidator && renderValidator()}
    </StyledInputWrapper>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  showValidator: PropTypes.bool,
  compact: PropTypes.bool
};

FormInput.defaultProps = {
  validate: () => {},
  showValidator: false,
  compact: false
};

export default memo(FormInput);
