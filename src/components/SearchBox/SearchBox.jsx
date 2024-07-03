import { useId } from 'react';
import { IconContext } from 'react-icons';
import { GrFormSearch } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import css from './SearchBox.module.css';

import {
  selectNameFilter,
  selectNumberFilter,
} from '../../redux/filters/selectors.js';

function SearchBox() {
  const fieldId = useId();
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);

  const handleFindName = ev => {
    const value = ev.target.value;
    dispatch(
      changeFilter({
        name: value.toLowerCase(),
        number: value,
      })
    );
  };

  return (
    <>
      <div className={css.SearchBox}>
        <h3 className={css.title}>Search contacts</h3>
        <label className={css.label} htmlFor={`${fieldId}-name`}>
          search
        </label>
        <div className={css.positionIcon}>
          <input
            className={css.input}
            id={`${fieldId}-name`}
            type="text"
            value={name || number}
            onChange={handleFindName}
          />
          <IconContext.Provider value={{ size: '2em' }}>
            <span>
              <GrFormSearch className={css.iconInp} />
            </span>
          </IconContext.Provider>
        </div>
        {/* {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <p>Are you sure you want to delete this contact?</p>
            <button onClick={handleDeleteContact}>Yes</button>
            <button onClick={() => setIsModalOpen(false)}>No</button>
          </Modal> */}
        )}
      </div>
    </>
  );
}

export default SearchBox;
