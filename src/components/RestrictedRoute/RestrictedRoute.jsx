import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
