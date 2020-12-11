import { useEffect } from 'react';
import getEmitter from '../eventEmitter';

const eventEmitter = getEmitter();

const arrayfy = (src) => (Array.isArray(src) ? src : [src]);

const useRefetchOn = (names, refetch1, refetch2) => {
  const listeners = [];
  useEffect(() => {
    arrayfy(names).forEach((name) => {
      listeners.push(
        eventEmitter.addListener(name, (...args) => {
          console.log(`event emitted - ${name}: ${args}`);
          refetch1();
          refetch2();
        }),
      );
    });

    return () => {
      listeners.forEach((l) => l.remove());
    };
  }, [refetch1, refetch2]);
};

export default useRefetchOn;
