import React from 'react';
import { useAuth } from '../../contexts/auth';


const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <section>
      <p>Olá {user?.name}</p>
      <button title="Sign out" onClick={handleSignOut}>Logout</button>
    </section>
  );
};

export default Dashboard;