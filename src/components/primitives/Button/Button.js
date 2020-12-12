import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledStartIcon } from './styled';


import { sizes, attachs, variants, colors } from '../../../styled/oneOf';

const Button = ({
  children,
  size,
  color,
  fluid,
  attached,
  disabled,
  variant,
  loading,
  onClick,
  startIcon,
  active,
  tooltip,
  ...rest
}) => {
  const handleClick = (e) => {
    if (disabled) {return null;}
    if (!loading) {onClick(e);}
    return null;
  };


  return (
    <StyledContainer
      variant={variant}
      size={size}
      color={color}
      fluid={fluid}
      attached={attached}
      isDisabled={disabled}
      active={active}
      onClick={handleClick}
      {...rest}
    >
      {renderContent()}
    </StyledContainer>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  fluid: PropTypes.bool,
  attached: PropTypes.oneOf(attachs),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  active: PropTypes.bool,
  variant: PropTypes.oneOf(variants),
  tooltip: PropTypes.string
};

Button.defaultProps = {
  size: 'default',
  color: 'default',
  fluid: false,
  attached: 'default',
  disabled: false,
  loading: false,
  onClick: () => {},
  startIcon: null,
  active: false,
  variant: 'default',
  tooltip: null
};

export default Button;
