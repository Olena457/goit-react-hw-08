import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';

function ContactList() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {loading && <Loader />}
      {!loading &&
        contacts &&
        !error &&
        contacts.map(({ number, name, id }) => (
          <li className={css.item} key={id}>
            <Contact id={id} number={number} name={name} />
          </li>
        ))}
      {error && <div>`Error:{error}`</div>}
    </ul>
  );
}
export default ContactList;
