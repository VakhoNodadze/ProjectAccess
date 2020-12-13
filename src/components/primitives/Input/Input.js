import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledContent,
  StyledSpinner,
  StyledIcon,
  StyledInput,
  StyledLabel,
  StyledFieldset,
  StyledLegend
} from './styled';
import * as icons from '../../../Icons';

import { sizes, attachs } from '../../../styled/oneOf';

const Input = ({
  onChange,
  name,
  id,
  type,
  defaultValue,
  disabled,
  register,
  error,
  label,
  placeholder,
  icon,
  loading,
  size,
  basic,
  checkmark,
  attached,
  errors,
  rightLabel,
  circular,
  ...props
}) => {
  const containerRef = useRef();

  const Icon = icon ? icons[icon] : null;

  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    onChange(e.target.value);
  };

  const handleFocusToggle = () => setIsFocused(!isFocused);


  return (
    <StyledContainer size={size} label={label} ref={containerRef}>
      <StyledContent
        className="content"
        basic={basic}
        isFocused={isFocused}
        size={size}
        error={error}
        attached={attached}
        label={label}
        circular={circular}
      >
        {icon && (
          <StyledIcon className="icon">
            <Icon color={isFocused || input.length > 0 ? 'rgba(0, 0, 0, 0.54)' : '#d9d9d9'} />
          </StyledIcon>
        )}
        {label && (
          <>
            <StyledLabel
              className="label"
              size={size}
              disabled={disabled}
              active={isFocused || input.length > 0 || defaultValue.length > 0}
              htmlFor={id || name}
              input-type={type}
            >
              {label}
            </StyledLabel>
          </>
        )}
        <StyledInput
          ref={register}
          id={id || name}
          disabled={disabled}
          type={type}
          name={name}
          size={size}
          defaultValue={defaultValue}
          tabIndex="0"
          onChange={handleChange}
          onFocus={handleFocusToggle}
          onBlur={handleFocusToggle}
          hasIcon={icon}
          placeholder={placeholder}
          {...props}
        />
        {label && (
          <StyledFieldset aria-hidden="true" error={error}>
            <StyledLegend active={isFocused || input.length > 0 || defaultValue.length > 0}>
              <span style={{ padding: '0 6px' }}>{label}</span>
            </StyledLegend>
          </StyledFieldset>
        )}
        {rightLabel && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              padding: '0 0 0 1rem',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              fontStyle: 'italic',
              fontSize: 12,
              color: '#dedede',
              cursor: 'default'
            }}
          >
            {rightLabel}
          </div>
        )}
      </StyledContent>
    </StyledContainer>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  basic: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  checkmark: PropTypes.bool,
  attached: PropTypes.oneOf(attachs),
  rightLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  circular: PropTypes.bool
};

Input.defaultProps = {
  onChange: () => {},
  placeholder: '',
  defaultValue: '',
  icon: null,
  loading: false,
  type: 'text',
  label: null,
  size: 'default',
  basic: false,
  error: false,
  disabled: false,
  checkmark: false,
  attached: 'default',
  rightLabel: null,
  circular: false
};

export default Input;
