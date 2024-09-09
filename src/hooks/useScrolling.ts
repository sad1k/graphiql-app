import { useLayoutEffect, useState } from 'react';

import _debounce from 'lodash/debounce';

const handleDebounceTime = 100;

const useScrolling = () => {
  let prevPosition = window.scrollY;

  const [scroll, setScroll] = useState(Boolean(window.scrollY));

  const handleScroll = _debounce(() => {
    const currentPosition = window.scrollY;

    prevPosition < currentPosition ? setScroll(true) : setScroll(false);
    prevPosition = currentPosition;
  }, handleDebounceTime);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scroll];
};

export default useScrolling;
