import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from '../Navigation/Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
export const Navigation = () => {
  function getClassActiveLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <div className={css.header}>
          <NavLink className={getClassActiveLink} to="/">
            Home
          </NavLink>

          {isLoggedIn && (
            <NavLink className={getClassActiveLink} to="/contacts">
              Contacts
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};
