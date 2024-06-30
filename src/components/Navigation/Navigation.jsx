// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import clsx from 'clsx';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  function activeLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <nav>
      <div className={css.header}>
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
      </div>
      {isLoggedIn && (
        <div className={css.header}>
          <NavLink className={activeLink} to="/contacts">
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};
