import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1',
});

// thunk
export const getContact = createAsyncThunk('contacts/getContact', async () => {
  const { data } = await instance.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await instance.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    console.log('id', id);
    await instance.delete(`/contacts/${id}`);
    return id;
  }
);

export const toggleContact = createAsyncThunk(
  'contacts/toggleContact',
  async ({ id, isImportant }) => {
    const { data } = await instance.put(`/contacts/${id}`, { isImportant });
    return data;
  }
);

// EXAMPLES
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.post('/contacts', contact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.responce.data);
//     }
//   }
// );

//
// export const getContact = () => async dispatch => {
//   dispatch(getContactLoading());
//   try {
//     const { data } = await instance.get('/contacts');
//     dispatch(getContactSuccess(data));
//   } catch (error) {
//     dispatch(getContactError(error));
//   }
// using THEN
//   dispatch(getContactLoading());
//   instance
//     .get('/contacts')
//     .then(({ data }) => dispatch(getContactSuccess(data)))
//     .catch(error => dispatch(getContactError(error)));
// };

//
// export const addContact = contact => dispatch => {
//   dispatch(addContactLoading());
//   instance
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

//
// export const deleteContact = id => dispatch => {
//   dispatch(deleteContactLoading());
//   instance
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

//
// export const toggleContact =
//   ({ id, isImportant }) =>
//   dispatch => {
//     const upd = { isImportant };

//     dispatch(toggleContactLoading());

//     instance
//       .put(`/contacts/${id}`, upd)
//       .then(({ data }) => dispatch(toggleContactSuccess(data)))
//       .catch(error => dispatch(toggleContactError(error)));
//   };
