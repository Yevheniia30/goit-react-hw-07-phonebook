import { createAction } from '@reduxjs/toolkit';
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1',
// });

// export const addUser = contact => dispatch => {
//   dispatch({ type: 'contacts/loading' });
//   instance
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch({ type: ADD, payload: data }))
//     .catch(error => dispatch({ type: 'contacts/error', payload: error }));
// };

// export const addUser = createAction(ADD);

// export const getUserLoading = createAction('contacts/getUserLoading');
// export const getUserSuccess = createAction('contacts/getUserSuccess');
// export const getUserError = createAction('contacts/getUserError');

export const addUserLoading = createAction('contacts/addUserLoading');
export const addUserSuccess = createAction('contacts/addUserSuccess');
export const addUserError = createAction('contacts/addUserError');

export const deleteUserLoading = createAction('contacts/deleteUserLoading');
export const deleteUserSuccess = createAction('contacts/deleteUserSuccess');
export const deleteUserError = createAction('contacts/deleteUserError');

export const toggleUserLoading = createAction('contacts/toggleUserLoading');
export const toggleUserSuccess = createAction('contacts/toggleUserSuccess');
export const toggleUserError = createAction('contacts/toggleUserError');

// export const deleteUser = createAction('contacts/delete');
export const filterUser = createAction('contacts/filter');
