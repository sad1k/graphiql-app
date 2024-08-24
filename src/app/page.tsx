import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';

const Home = (): JSX.Element => (
  <>
    <Header>
      <Navigation />{' '}
    </Header>
    <main>Welcome Page</main>
    <Footer />
  </>
);

const Page = () => <Home />;

export default Page;
