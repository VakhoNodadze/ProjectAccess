import React, { useState, useCallback, useRef, useEffect } from 'react';

import DropdownHeader from './DropdownHeader';
import DropdownContent from './DropdownContent';

const style = {
  cursor: 'pointer'
};

const Dropdown = React.forwardRef(({ children, value, header, content, size, kind, borderRadius, ...rest }, ref) => {
  const containerRef = useRef();
  const [contentVisible, setContentVisible] = useState(false);

  const handleShowContent = () =>{
    setContentVisible((prevState) => !prevState);
  };

  const handleHideContent = () => setContentVisible(false);

  const handleOutsideClick = useCallback(
    (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handleHideContent();
      }
    },
    [containerRef.current]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);


  return (
    <div ref={ref} {...rest}>
      <div style={style} ref={containerRef} onClick={handleShowContent}>
        {children}
        {header && <DropdownHeader>{header}</DropdownHeader>}
        {content && <DropdownContent isVisible={contentVisible}>{content}</DropdownContent>}
      </div>
    </div>
  );
});

Dropdown.defaultProps = {
  isOpen: false
};

export default React.memo(Dropdown);
