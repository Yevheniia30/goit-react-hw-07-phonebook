import { connect } from 'react-redux';
import {
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  deleteContact,
  // filterContact,
} from '../../redux/phoneBook/phoneBook-operations';
import { getFilteredContacts } from '../../redux/phoneBook/phoneBook-selectors';

import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts = [], onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.name}>{name}:</span>{' '}
          <span className={s.number}>{number}</span>
          <button className={s.btn} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
