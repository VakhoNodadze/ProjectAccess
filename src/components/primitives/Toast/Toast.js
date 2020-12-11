import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { sizes, positions, variants } from '../../../styled/oneOf';

import { StyledContainer, StyledContent } from './styled';

import ToastContainer from './ToastContainer';

import useToasts from '../../hooks/useToasts';

const Toast = ({ id, content, size, position, variant, ...rest }) => {
  const { removeToast } = useToasts();

  const handleRemove = () => {
    removeToast(id);
  };

  useEffect(
    () => {
      const timer = setTimeout(() => {
        removeToast(id);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    },
    [id, removeToast]
  );

  return (
    <StyledContainer position={position} onClick={handleRemove} {...rest}>
      <StyledContent size={size} variant={variant}>
        {content}
      </StyledContent>
    </StyledContainer>
  );
};

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  position: PropTypes.oneOf(positions),
  variant: PropTypes.oneOf(variants)
};

Toast.defaultProps = {
  content: '',
  size: 'default',
  position: 'top right',
  variant: 'default'
};

Toast.Container = ToastContainer;

export default Toast;
