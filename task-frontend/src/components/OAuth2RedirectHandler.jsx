import React, { useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function OAuth2RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      // alert(token);
      setTimeout(alert(token), 10000);
      console.log(token);
      
      setToken(token);
      navigate('/');
    } else {
            console.log("login", token);
      navigate('/login');
    }
  }, [location, setToken, navigate]);

  return <p>Authentification en cours...</p>;
}

export default OAuth2RedirectHandler;