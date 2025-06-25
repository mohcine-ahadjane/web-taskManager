import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      {user ? (
        <>
          <span>Bienvenue, {user.email}</span>
          <button onClick={logout}>Déconnexion</button>
        </>
      ) : (
        <span>Non connecté</span>
      )}
    </nav>
  );
}

export default Navbar;
