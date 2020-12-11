import React from 'react';
import { createPortal } from 'react-dom';
import { useTransition } from 'react-spring';

import { StyledWrapper } from './styled';

import Toast from './Toast';

const ToastContainer = ({ toasts }) => {
  const transitions = useTransition(toasts, (toast) => toast.id, {
    from: { right: '-100%' },
    enter: { right: '0%' },
    leave: { right: '-100%' }
  });

  return createPortal(
    <StyledWrapper>
      {transitions.map(({ item, key, props }) => (
        <Toast key={key} id={item.id} style={props} content={item.content} variant={item.variant} />
      ))}
    </StyledWrapper>,
    document.body
  );
};

export default ToastContainer;
