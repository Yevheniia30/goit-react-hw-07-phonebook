import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleUser, deleteUser } from 'redux/contacts/contactsOperations';
import s from './ContactList.module.css';
import { FaStar } from 'react-icons/fa';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log('item', item);
  return (
    <li className={s.item}>
      <FaStar
        fill={item?.isImportant ? '#f5d20d' : '#cecece'}
        title="mark as important"
        cursor="pointer"
        // stroke-width="10"
        onClick={() =>
          dispatch(toggleUser({ id: item.id, isImportant: !item.isImportant }))
        }
      />
      <b className={s.name}>{item.name}</b>
      <span>{item.phone}</span>
      <button className={s.btn} onClick={() => dispatch(deleteUser(item.id))}>
        Delete contact
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isImportant: PropTypes.bool,
  }),
};
