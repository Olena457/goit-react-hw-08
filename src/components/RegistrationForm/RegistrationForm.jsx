import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 symbols!')
    .required('Required'),
});
const RegistrationForm = () => {
  const dispatch = useDispatch();
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={validationSchema}
    OnSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(register(values));
      actions.setSubmitting(false);
      actions.resetForm();
    }}
  >
    {({ isSubmitting }) => (
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor="name">Username</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div className={css.label}>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Register
        </button>
      </Form>
    )}
  </Formik>;
};

export default RegistrationForm;
