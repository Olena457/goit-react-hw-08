import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { useAuth } from '../../hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};
