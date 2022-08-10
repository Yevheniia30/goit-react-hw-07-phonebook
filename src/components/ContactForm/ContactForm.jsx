import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactForm.module.css';
// import { addContact } from 'redux/contacts/contactsActions';
// import { addContact } from 'redux/contacts/contactsOperations';
import { contactsOperations } from 'redux/contacts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addedName = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const addedphone = contacts.find(item => item.phone === phone);

    const contact = {
      name,
      phone,
    };

    addedName
      ? alert(`${name} is already in contacts with phone ${addedName.phone}`)
      : addedphone
      ? alert(`${phone} is already in contacts as ${addedphone.name}`)
      : !name || !phone
      ? alert('Сomplete all fields')
      : dispatch(contactsOperations.addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
        />
      </label>
      <label className={s.label}>
        phone
        <input
          className={s.input}
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
        />
      </label>
      <button className={s.input + ' ' + s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
