import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Loading from '../../components/Loading/Loading';
import { fetchContacts } from '../../redux/contacts/operations';
import css from '../ContactsPage/ContactPage.module.css';

import { selectLoading } from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h3 className={css.title}>Your Contacts</h3>
      <ContactForm />
      {isLoading ? <Loading /> : <ContactList />}
    </>
  );
}
