'use client';

import { useAppSelector } from '@/utils/store/hooks';
import HomeTitle from './HomeTitle/HomeTitle';
import HomeLinks from './HomeLinks/HomeLinks';
import HomeImage from './HomeImage/HomeImage';
import About from '../About/About';

const Home = () => {
  const authState = useAppSelector((state) => state.auth.authState);

  return (
    <section data-testid='home-section'>
      <article data-testid='home-page'>
        <HomeTitle name={authState?.name} />
        <HomeLinks isAuth={Boolean(authState)} />
        <HomeImage />
      </article>
      <About />
    </section>
  );
};

export default Home;
