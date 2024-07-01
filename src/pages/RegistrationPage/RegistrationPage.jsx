import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from '../RegistrationPage/RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div>
      <h3 className={css.title}>Registration page</h3>
      <RegistrationForm />
    </div>
  );
}
