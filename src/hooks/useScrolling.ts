import { useEffect, useRef, useState } from 'react';

const useScrolling = () => {
  const scroll = useRef(0);

  const [isScrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (scroll.current === 0 && window.scrollY >= 0) {
      scroll.current = window.scrollY;
      setScrolling(true);
    } else if (scroll.current >= 0 && window.scrollY === 0) {
      scroll.current = 0;
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [isScrolling];
};

export default useScrolling;
