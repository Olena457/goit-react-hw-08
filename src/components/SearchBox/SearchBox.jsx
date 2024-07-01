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
    <div>
      <div className={css.SearchBox}>
        <label className={css.label} htmlFor={`${fieldId}-name`}>
          Search contacts by name
        </label>
        <input
          className={css.input}
          id={`${fieldId}-name`}
          type="text"
          value={name || number}
          onChange={handleFindName}
        />
        <IconContext.Provider value={{ size: '2em' }}>
          <span className={css.inputIcon}>
            <GrFormSearch />
          </span>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default SearchBox;
