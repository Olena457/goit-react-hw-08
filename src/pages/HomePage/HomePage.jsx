import css from '../HomePage/HomePage.module.css';
import TitleComponent from '../../components/TitleComponent/TitleComponent';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from './../../components/UserMenu/UserMenu';
export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className={css.container}>
        {!isLoggedIn && (
          <h1 className={css.title}>Welcome to the task manager page📚</h1>
        )}
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <TitleComponent>
              To get started,please at the beginning create a login!👌
            </TitleComponent>
            <p>
              <Link to="/register" className={css.btn}>
                register
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
}
