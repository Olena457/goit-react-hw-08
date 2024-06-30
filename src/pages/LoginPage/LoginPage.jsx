import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function Login() {
  return (
    <div>
      <title className={css.title}>Login page</title>
      <LoginForm />
    </div>
  );
}
