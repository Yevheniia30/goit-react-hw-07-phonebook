import axios from 'axios';
import {
  getUserLoading,
  getUserSuccess,
  getUserError,
  addUserLoading,
  addUserError,
  addUserSuccess,
  deleteUserLoading,
  deleteUserSuccess,
  deleteUserError,
  toggleUserLoading,
  toggleUserSuccess,
  toggleUserError,
} from './contactsActions';

const instance = axios.create({
  baseURL: 'https://62eebbae8d7bc7c2eb71c14b.mockapi.io/api/v1',
});

//
export const getUser = () => async dispatch => {
  dispatch(getUserLoading());
  try {
    const { data } = await instance.get('/contacts');
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError(error));
  }
  // dispatch(getUserLoading());
  // instance
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(getUserSuccess(data)))
  //   .catch(error => dispatch(getUserError(error)));
};

//
export const addUser = contact => dispatch => {
  dispatch(addUserLoading());
  instance
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addUserSuccess(data)))
    .catch(error => dispatch(addUserError(error)));
};

//
export const deleteUser = id => dispatch => {
  dispatch(deleteUserLoading());
  instance
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteUserSuccess(id)))
    .catch(error => dispatch(deleteUserError(error)));
};

//
export const toggleUser =
  ({ id, isImportant }) =>
  dispatch => {
    const upd = { isImportant };

    dispatch(toggleUserLoading());

    instance
      .put(`/contacts/${id}`, upd)
      .then(({ data }) => dispatch(toggleUserSuccess(data)))
      .catch(error => dispatch(toggleUserError(error)));
  };
