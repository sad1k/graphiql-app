import dynamic from 'next/dynamic';

const SignUp = dynamic(() => import('@/components/auth/SignUp/SignUp'), {
  ssr: false,
});

const SignUpPage = (): JSX.Element => (
  <section data-testid='sign-up'>
    <SignUp />
  </section>
);

export default SignUpPage;
