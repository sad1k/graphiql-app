'use client';

import { useAppSelector } from '@/utils/store/hooks';
import HomeTitle from './HomeTitle/HomeTitle';
import HomeLinks from './HomeLinks/HomeLinks';
import HomeImage from './HomeImage/HomeImage';

const Welcome = () => {
  const { authState } = useAppSelector((state) => state.auth);

  return (
    <article>
      <HomeTitle name={authState?.name} />
      <HomeLinks isAuth={Boolean(authState)} />
      <HomeImage />
    </article>
  );
};

export default Welcome;
