import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
// import { filterContact } from 'redux/contacts/contactsActions';
import { filterContact } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };

  return (
    <label>
      Search contact by name
      <input
        type="text"
        className={s.filter}
        placeholder="Search contact..."
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
