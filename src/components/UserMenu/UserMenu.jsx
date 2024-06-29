import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.userName}>Welcome, {user.name}👋</p>
      <button
        type="button"
        className={css.btnUser}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
