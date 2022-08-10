import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './ContactList.module.css';
import { contactsOperations } from 'redux/contacts';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  console.log('error', error);

  useEffect(() => {
    dispatch(contactsOperations.getContact());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      const normalized = filter.toLowerCase();

      return contacts.filter(item =>
        item.name.toLowerCase().includes(normalized)
      );
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <ul className={s.list}>
        {filteredContacts?.map(item => (
          <ContactItem item={item} key={item.id} />
        ))}
      </ul>
      {loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
      {error && (
        <p style={{ color: 'red' }}>Oops, something went wrong, try again</p>
      )}
    </>
  );
};
