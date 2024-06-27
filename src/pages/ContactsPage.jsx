import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from '../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import {
  //   selectContacts,
  selectLoading,
  selectError,
  selectFilteredContacts,
} from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  //   const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <SearchBox />
      {isLoading ? <Loader /> : <ContactList contacts={filteredContacts} />}
      {error && <p>Something went wrong: {error}</p>}
    </>
  );
};

export default ContactsPage;
