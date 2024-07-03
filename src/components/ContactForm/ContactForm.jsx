import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { FaRegAddressBook } from 'react-icons/fa6';
import { FaUserTie } from 'react-icons/fa';
import { FaMobileRetro } from 'react-icons/fa6';

import SearchBox from '../SearchBox/SearchBox';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

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
    <>
      <div className={css.container}>
        <div className={css.containerForm}>
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
            <Form className={css.form}>
              <h3 className={css.title}>Add contacts</h3>
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
                    <FaUserTie />
                  </span>
                </div>
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </div>
              <div className={css.fields}>
                <label className={css.label} htmlFor="number">
                  Number
                </label>
                <div className={css.positionIcon}>
                  <Field
                    className={css.input}
                    type="text"
                    name="number"
                    id="number"
                  />
                  <span className={css.iconInp}>
                    <FaMobileRetro />
                  </span>
                </div>
                <ErrorMessage
                  className={css.error}
                  name="number"
                  component="div"
                />
              </div>

              <button className={css.btn} type="submit">
                Add contact
              </button>
              <SearchBox />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
