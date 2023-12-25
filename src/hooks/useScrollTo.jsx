// ScrollHook.js
import { useRef } from 'react';

const useScrollTo = () => {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return { targetRef, scrollToTarget };
};

export default useScrollTo;
