import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
}
