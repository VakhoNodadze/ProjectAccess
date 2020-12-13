import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

const duration = 175;

const Collapse = ({ children, in: inProp, onExited = () => {}, ...rest }) => {
  const innerRef = useRef();
  const [height, setHeight] = useState('auto');

  const onEntering = () => {
    setHeight(innerRef.current.clientHeight);
  };

  const onEntered = () => {
    setHeight(innerRef.current.clientHeight);
  };

  const onExiting = () => {
    setHeight(innerRef.current.clientHeight);
  };

  const defaultStyle = {
    transformOrigin: '100% 0',
    transition: `all ${duration}ms linear`,
    opacity: 0,
    transform: 'scaleY(1)',
    height: 'auto'
  };

  const transitionStyles = {
    entering: { opacity: 0, transform: 'scaleY(0)', height: 0 },
    entered: { opacity: 1, transform: 'scaleY(1)', height },
    exiting: { opacity: 0, transform: 'scaleY(0)', height: 0 },
    exited: { opacity: 0, transform: 'scaleY(0)', height: 0 }
  };

  return (
    <Transition
      in={inProp}
      timeout={duration}
      onEntering={onEntering}
      onEntered={onEntered}
      onExiting={onExiting}
      onExited={onExited}
      unmountOnExit
    >
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          {...rest}
        >
          <div ref={innerRef}>{children}</div>
        </div>
      )}
    </Transition>
  );
};

Collapse.defaultProps = {
  in: false
};

export default Collapse;
