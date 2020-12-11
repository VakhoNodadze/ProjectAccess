import React, { useContext } from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../components/Toast';

import { generateId } from '../utils/helpers';

// const useToasts = () => {
//   const [toasts, setToasts] = useState([])

//   const addToast = (variant, message) => {
//     setToasts([...toasts, { variant, message, id: generateId() }])
//   }

//   const handleHide = id => {
//     setToasts([...toasts.filter(t => t.id !== id)])
//   }

//   const renderToasts = useCallback(() => (
//     <>
//       {toasts.map((item, index) => (
//         <Toast key={item.id} position="top right" currentIndex={index} visible={toasts.filter(t => t.id === item.id).length > 0} variant={item.variant} onHide={() => handleHide(item.id)} content={item.message} />
//       ))}
//     </>
//   ))

//   return [addToast, renderToasts]
// }

const useToasts = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};

export default useToasts;
