import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './ContactList.module.css';
import { contactsOperations } from 'redux/contacts';
// import { getUser } from 'redux/contacts/contactsOperations';
import { ContactItem } from './ContactItem';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.item);
  const filter = useSelector(state => state.contacts.filter);
  const loading = useSelector(state => state.loading);

  console.log('dispatch', dispatch);

  useEffect(() => {
    dispatch(contactsOperations.getUser());
  }, [dispatch]);

  // const handleDelete = id => {
  //   dispatch(deleteUser(id));
  // };

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
      {loading && <ThreeDots color="#00BFFF" height={80} width={80} />}
      <ul className={s.list}>
        {filteredContacts?.map(item => (
          <ContactItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
