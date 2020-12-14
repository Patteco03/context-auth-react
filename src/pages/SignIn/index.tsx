import React from 'react';
import { useAuth } from '../../contexts/auth';


const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <section>
      <button title="Sign in" onClick={handleSignIn}>SignIn</button>
    </section>
  );
};

export default SignIn;