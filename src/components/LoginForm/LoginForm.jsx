import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.label}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
          </div>
          <div className={css.label}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
