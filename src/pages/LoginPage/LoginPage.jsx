import LoginForm from '../../components/LoginForm/LoginForm';
import css from '../LoginPage/LoginPage.module.css';

export default function LoginPage() {
  return (
    <div>
      <h3 className={css.title}>Login page</h3>
      <LoginForm />
    </div>
  );
}
