import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/components/Home/Home'), {
  ssr: false,
});

const Page = () => (
  <section>
    <Home />
  </section>
);

export default Page;
