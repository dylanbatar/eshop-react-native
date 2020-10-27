import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import secureStore from '../store/secureStore';

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (user) => {
    await secureStore.set('token', user);
    setUser(user);
  };

  const logout = () => {
    secureStore.remove('token');
    setUser(null);
  };

  return { user, login, logout };
};
