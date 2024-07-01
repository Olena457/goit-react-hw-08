import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from '../RegistrationPage/RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div>
      <h2 className={css.title}>Registration page</h2>
      <RegistrationForm />
    </div>
  );
}
