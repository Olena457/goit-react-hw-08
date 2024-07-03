import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <>
      <header className={css.header}>
        <h2 className={css.title}> PhoneBook</h2>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </header>
    </>
  );
};
