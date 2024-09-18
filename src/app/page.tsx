import About from '@/components/About/About';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/components/Home/Home'), {
  ssr: false,
});

const Page = () => (
  <section>
    <Home />
    <About />
  </section>
);

export default Page;
