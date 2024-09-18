import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/components/Home/Home'), {
  ssr: false,
});

const Page = () => <Home />;

export default Page;
