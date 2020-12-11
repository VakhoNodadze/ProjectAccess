import { useContext } from 'react';

import { ToastContext } from '@contexts/ToastContext';

const useToasts = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};

export default useToasts;
