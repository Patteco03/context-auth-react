import React from 'react';
import { signIn } from '../../service/auth';

const SignIn: React.FC = () => {
  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }

  return (
    <section>
      <button title="Sign in" onClick={handleSignIn}>SignIn</button>
    </section>
  );
};

export default SignIn;