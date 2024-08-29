import dynamic from 'next/dynamic';

const SignUp = dynamic(() => import('@/components/auth/SignUp/SignUp'), {
  ssr: false,
});

const SignUpPage = (): JSX.Element => <SignUp />;

export default SignUpPage;
