import dynamic from 'next/dynamic';

const SignIn = dynamic(() => import('@/components/auth/SingIn/SingIn'), {
  ssr: false,
});

const SignInPage = (): JSX.Element => (
  <section data-testid='sign-in'>
    <SignIn />
  </section>
);

export default SignInPage;
