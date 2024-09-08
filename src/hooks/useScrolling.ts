import { useEffect, useState } from 'react';

const useScrolling = () => {
  let scroll = 0;

  const [isScrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (scroll === 0 && window.scrollY >= 0) {
      scroll = window.scrollY;
      setScrolling(true);
    } else if (scroll >= 0 && window.scrollY === 0) {
      scroll = 0;
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
