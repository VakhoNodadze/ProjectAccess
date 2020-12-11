import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;


// import { useState, useEffect, useRef } from 'react'

// const useOutsideClick = () => {
//   const nodeRef = useRef([])

//   const [expand, setExpand] = useState(false)

//   const listenRef = e => {
//     if (!nodeRef.current.length) return

//     let exist = false
//     nodeRef.current.forEach(el => {
//       if (el && el.contains(e.target)) exist = true
//     })
//     if (!exist || e.which === 27) setExpand(false)
//   }

//   useEffect(() => {
//     document.addEventListener('keyup', listenRef)
//     document.addEventListener('mousedown', listenRef)
//     document.addEventListener('touchend', listenRef)

//     return () => {
//       document.removeEventListener('keyup', listenRef)
//       document.removeEventListener('mousedown', listenRef)
//       document.removeEventListener('touchend', listenRef)
//     }
//   }, [])

//   return {
//     expand,
//     setExpand,
//     nodeRef
//   }
// }

// export default useOutsideClick
