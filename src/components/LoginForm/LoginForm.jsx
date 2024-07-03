import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { MdEmail } from 'react-icons/md';
import { PiLockKeyFill } from 'react-icons/pi';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import css from '../LoginForm/LoginForm.module.css';

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password is too short!')
    .max(20, 'Password is too long!')
    .required('Password is required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success('Login successful!');
      })
      .catch(() => {
        toast.error('Problem with the registration process');
      });
    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <div className={css.containerForm}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={UserSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <h3 className={css.title}>Login Page</h3>
            <div className={css.fields}>
              <label className={css.label} htmlFor={`${fieldId}-email`}>
                Email
              </label>
              <div className={css.positionIcon}>
                <Field
                  className={css.input}
                  type="email"
                  name="email"
                  id={`${fieldId}-email`}
                />
                <span className={css.iconInp}>
                  <MdEmail />
                </span>
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fields}>
              <label className={css.label} htmlFor={`${fieldId}-password`}>
                Password
              </label>
              <div className={css.positionIcon}>
                <Field
                  className={css.input}
                  type="password"
                  name="password"
                  id={`${fieldId}-password`}
                />
                <span className={css.iconInp}>
                  <PiLockKeyFill />
                </span>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>

            <button className={css.btn} type="submit">
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
