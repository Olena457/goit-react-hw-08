import css from './SearchBox.module.css';
import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import {
  selectNameFilter,
  selectPhoneFilter,
} from '../../redux/filters/selectors';
import Modal from '../Modal';
import toast from 'react-hot-toast';

function SearchBox() {
  const searchFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();
  const nameValue = useSelector(selectNameFilter);
  const phoneValue = useSelector(selectPhoneFilter);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNameChange = ev => {
    dispatch(changeFilter({ name: ev.target.value }));
  };

  const handlePhoneChange = ev => {
    dispatch(changeFilter({ phone: ev.target.value }));
  };

  const handleDeleteContact = () => {
    setIsModalOpen(false);
    toast.success('Contact deleted successfully');
  };

  return (
    <div>
      <div className={css.SearchBox}>
        <label className={css.label} htmlFor={searchFieldId}>
          Search contacts by name
        </label>
        <input
          className={css.input}
          id={searchFieldId}
          type="text"
          value={nameValue}
          onChange={handleNameChange}
        />
      </div>
      <div className={css.SearchBox}>
        <label className={css.label} htmlFor={phoneFieldId}>
          Search contacts by phone
        </label>
        <input
          className={css.input}
          id={phoneFieldId}
          type="text"
          value={phoneValue}
          onChange={handlePhoneChange}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <p>Are you sure you want to delete this contact?</p>
          <button onClick={handleDeleteContact}>Yes</button>
          <button onClick={() => setIsModalOpen(false)}>No</button>
        </Modal>
      )}
    </div>
  );
}

export default SearchBox;
