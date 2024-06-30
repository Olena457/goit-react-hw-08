import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { RiUser3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { PiLockKeyFill } from 'react-icons/pi';
import css from './RegistrationForm.module.css';

const UserSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email address').required('Required email'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 symbols!')
    .required('Required password'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleRegisteredUser = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Account created successfully');
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Problem with the registration process');
      });
  };

  return (
    <div className={css.container}>
      <div className={css.containerForm}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={UserSchema}
          onSubmit={handleRegisteredUser}
        >
          {({ handleSubmit }) => (
            <Form className={css.form} onSubmit={handleSubmit}>
              <p className={css.titleForm}>
                Do not have an account? Create one.
              </p>
              <div className={css.fields}>
                <label className={css.label} htmlFor="name">
                  Name
                </label>
                <div className={css.positionIcon}>
                  <Field
                    className={css.input}
                    type="text"
                    name="name"
                    id="name"
                  />
                  <span className={css.iconInp}>
                    <RiUser3Fill />
                  </span>
                </div>
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.fields}>
                <label className={css.label} htmlFor="email">
                  Email
                </label>
                <div className={css.positionIcon}>
                  <Field type="email" name="email" id="email" />
                  <span className={css.iconInp}>
                    <MdEmail />
                  </span>
                </div>
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.fields}>
                <label className={css.label} htmlFor="password">
                  Password
                </label>
                <div className={css.positionIcon}>
                  <Field type="password" name="password" id="password" />
                  <span className={css.iconInp}>
                    <PiLockKeyFill />
                  </span>
                </div>
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.error}
                />
              </div>

              <button className={css.btn} type="submit">
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
