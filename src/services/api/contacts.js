import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1',
});

export const getContacts = () => {
  const data = instance.get('/contacts');
  return data;
};

export const addContact = contact => {
  const data = instance.post('/contacts', contact);
  return data;
};

export const deleteContact = id => {
  return instance.delete(`/contacts/${id}`);
};
