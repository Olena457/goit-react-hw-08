import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function Register() {
  return (
    <div>
      <title className={css.title}>Registration page</title>
      <RegistrationForm />
    </div>
  );
}
