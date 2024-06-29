import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import { fetchContacts } from '../../redux/contacts/operations';
import css from './ContactPage.module.css';

import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title className={css.title}>Your Contacts</title>
      <ContactForm />
      {isLoading ? <Loader /> : <ContactList contacts={filteredContacts} />}
      {error && <p>Something went wrong: {error}</p>}
    </>
  );
};

export default ContactsPage;
