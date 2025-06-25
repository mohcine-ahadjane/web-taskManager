import { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function OAuth2RedirectHandler() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      login(token);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [searchParams, navigate, login]);

  return <p>Redirecting...</p>;
}

export default OAuth2RedirectHandler;