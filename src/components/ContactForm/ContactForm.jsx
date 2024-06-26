import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegAddressBook } from 'react-icons/fa6';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
});

function ContactForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        dispatch(addContact(values));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      <>
        <Form className={css.contactForm}>
          <div className={css.phoneBook}>
            <FaRegAddressBook className={css.homeIcon} />
            Phonebook
          </div>
          <label className={css.contactFormlabel} htmlFor="name">
            Name
          </label>
          <div className={css.fieldWrapper}>
            <Field
              className={css.contactFormInput}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <label className={css.contactFormlabel} htmlFor="number">
            Number
          </label>
          <div className={css.fieldWrapper}>
            <Field
              className={css.contactFormInput}
              type="text"
              name="number"
              id="number"
            />
            <ErrorMessage className={css.error} name="number" component="div" />
          </div>

          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </Form>
      </>
    </Formik>
  );
}

export default ContactForm;
