import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

function ContactList() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {loading && <Loading />}
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
