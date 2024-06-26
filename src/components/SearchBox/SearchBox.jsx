import css from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const handleChange = ev => {
    dispatch(changeFilter(ev.target.value));
  };
  return (
    <div className={css.SearchBox}>
      <label className={css.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={searchFieldId}
        type="text"
        value={value}
        onChange={handleChange}
        // type="search"
        // inputMode="search"
      />
    </div>
  );
}
export default SearchBox;
