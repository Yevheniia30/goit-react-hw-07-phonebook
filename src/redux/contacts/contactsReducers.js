import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // deleteUser,
  filterUser,
  //
  getUserLoading,
  getUserSuccess,
  getUserError,
  //
  addUserLoading,
  addUserSuccess,
  addUserError,
  //
  deleteUserLoading,
  deleteUserSuccess,
  deleteUserError,
  //
  toggleUserSuccess,
  toggleUserLoading,
  toggleUserError,
} from './contactsActions';
// import { addUser } from './contactsOperations';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

export const itemReducer = createReducer(initialState.contacts, {
  [getUserSuccess]: (_, { payload }) => payload,
  [addUserSuccess]: (state, { payload }) => [...state, payload],
  [deleteUserSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [toggleUserSuccess]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? payload : item)),
  // [addUser]: (state, { payload }) => [...state, payload],
  // [deleteUser]: (state, { payload }) =>
  //   state.filter(item => item.id !== payload),
});

export const loadingReducer = createReducer(initialState.loading, {
  [addUserLoading]: () => true,
  [addUserSuccess]: () => false,
  [addUserError]: () => false,

  [deleteUserLoading]: () => true,
  [deleteUserSuccess]: () => false,
  [deleteUserError]: () => false,

  [getUserLoading]: () => true,
  [getUserSuccess]: () => false,
  [getUserError]: () => false,

  [toggleUserLoading]: () => true,
  [toggleUserSuccess]: () => false,
  [toggleUserError]: () => false,
});

export const errorReducer = createReducer(initialState.error, {
  [addUserError]: (_, { payload }) => payload,
  [deleteUserError]: (_, { payload }) => payload,
  [getUserError]: (_, { payload }) => payload,
  [toggleUserError]: (_, { payload }) => payload,
});

export const filterReducer = createReducer(initialState.filter, {
  [filterUser]: (_, { payload }) => payload,
});

export const reducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
