import { useLayoutEffect, useState } from 'react';

import _debounce from 'lodash/debounce';

const handleDebounceTime = 100;

const maxScrolDiff = 25;
const minScrolDiff = -25;

const useScrolling = () => {
  let prevPosition = window ? window.scrollY : 0;

  const [scroll, setScroll] = useState(Boolean(prevPosition));

  const handleScroll = _debounce(() => {
    const currentPosition = window.scrollY;

    const diff = prevPosition - currentPosition;

    if (diff < maxScrolDiff && diff > -minScrolDiff) return;

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
