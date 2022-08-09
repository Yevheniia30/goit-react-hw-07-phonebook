import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   getUserLoading,
//   getUserSuccess,
//   getUserError,
//   addUserLoading,
//   addUserError,
//   addUserSuccess,
//   deleteUserLoading,
//   deleteUserSuccess,
//   deleteUserError,
//   toggleUserLoading,
//   toggleUserSuccess,
//   toggleUserError,
// } from './contactsActions';

const instance = axios.create({
  baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1',
});

// thunk
export const getUser = createAsyncThunk('contacts/getUser', async () => {
  const { data } = await instance.get('/contacts');
  return data;
});

export const addUser = createAsyncThunk('contacts/addUser', async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
});

export const deleteUser = createAsyncThunk('contacts/deleteUser', async id => {
  console.log('id', id);
  await instance.delete(`/contacts/${id}`);
  return id;
});

export const toggleUser = createAsyncThunk(
  'contacts/toggleUser',
  async ({ id, isImportant }) => {
    // const upd = { isImportant };
    const { data } = await instance.put(`/contacts/${id}`, { isImportant });
    return data;
  }
);

// export const addUser = createAsyncThunk(
//   'contacts/addUser',
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
// export const getUser = () => async dispatch => {
//   dispatch(getUserLoading());
//   try {
//     const { data } = await instance.get('/contacts');
//     dispatch(getUserSuccess(data));
//   } catch (error) {
//     dispatch(getUserError(error));
//   }
// using THEN
//   dispatch(getUserLoading());
//   instance
//     .get('/contacts')
//     .then(({ data }) => dispatch(getUserSuccess(data)))
//     .catch(error => dispatch(getUserError(error)));
// };

//
// export const addUser = contact => dispatch => {
//   dispatch(addUserLoading());
//   instance
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addUserSuccess(data)))
//     .catch(error => dispatch(addUserError(error)));
// };

//
// export const deleteUser = id => dispatch => {
//   dispatch(deleteUserLoading());
//   instance
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteUserSuccess(id)))
//     .catch(error => dispatch(deleteUserError(error)));
// };

//
// export const toggleUser =
//   ({ id, isImportant }) =>
//   dispatch => {
//     const upd = { isImportant };

//     dispatch(toggleUserLoading());

//     instance
//       .put(`/contacts/${id}`, upd)
//       .then(({ data }) => dispatch(toggleUserSuccess(data)))
//       .catch(error => dispatch(toggleUserError(error)));
//   };
