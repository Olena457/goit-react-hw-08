import css from './Contact.module.css';
import { RiUser3Fill } from 'react-icons/ri';
import { BiSolidPhone } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.userCard}>
        <div className={css.userInfo}>
          <RiUser3Fill />
          <p className={css.userName}>{name}</p>
        </div>
        <div className={css.userInfo}>
          <BiSolidPhone />
          <p className={css.userName}>{number}</p>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}
