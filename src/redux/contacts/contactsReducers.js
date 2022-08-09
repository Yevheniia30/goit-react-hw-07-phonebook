import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  // deleteUser,
  filterUser,
  //
  // getUserLoading,
  // getUserSuccess,
  // getUserError,
  // //
  // addUserLoading,
  // addUserSuccess,
  // addUserError,
  // //
  // deleteUserLoading,
  // deleteUserSuccess,
  // deleteUserError,
  // //
  // toggleUserSuccess,
  // toggleUserLoading,
  // toggleUserError,
} from './contactsActions';
// import { addUser } from './contactsOperations';
import { getUser, addUser, deleteUser, toggleUser } from './contactsOperations';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

export const itemReducer = createReducer(initialState.contacts, {
  [getUser.fulfilled]: (_, { payload }) => payload,
  // [getUserSuccess]: (_, { payload }) => payload,
  [addUser.fulfilled]: (state, { payload }) => [...state, payload],
  // [addUserSuccess]: (state, { payload }) => [...state, payload],
  [deleteUser.fulfilled]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  // [deleteUserSuccess]: (state, { payload }) =>
  //   state.filter(item => item.id !== payload),
  [toggleUser.fulfilled]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? payload : item)),
  // [toggleUserSuccess]: (state, { payload }) =>
  //   state.map(item => (item.id === payload.id ? payload : item)),
  // [addUser]: (state, { payload }) => [...state, payload],
  // [deleteUser]: (state, { payload }) =>
  //   state.filter(item => item.id !== payload),
});

export const loadingReducer = createReducer(initialState.loading, {
  [getUser.pending]: () => true,
  [getUser.fulfilled]: () => false,
  [getUser.rejected]: () => false,
  // [getUserLoading]: () => true,
  // [getUserSuccess]: () => false,
  // [getUserError]: () => false,

  [addUser.pending]: () => true,
  [addUser.fulfilled]: () => false,
  [addUser.rejected]: () => false,
  // [addUserLoading]: () => true,
  // [addUserSuccess]: () => false,
  // [addUserError]: () => false,

  [deleteUser.pending]: () => true,
  [deleteUser.fulfilled]: () => false,
  [deleteUser.rejected]: () => false,
  // [deleteUserLoading]: () => true,
  // [deleteUserSuccess]: () => false,
  // [deleteUserError]: () => false,

  [toggleUser.pending]: () => true,
  [toggleUser.fulfilled]: () => false,
  [toggleUser.rejected]: () => false,
  // [toggleUserLoading]: () => true,
  // [toggleUserSuccess]: () => false,
  // [toggleUserError]: () => false,
});

export const errorReducer = createReducer(initialState.error, {
  [getUser.rejected]: (_, { payload }) => payload,
  [getUser.pending]: () => null,
  // [getUserError]: (_, { payload }) => payload,

  [addUser.rejected]: (_, { payload }) => payload,
  [addUser.pending]: () => null,
  // [addUserError]: (_, { payload }) => payload,

  [deleteUser.rejected]: (_, { payload }) => payload,
  [deleteUser.pending]: () => null,
  // [deleteUserError]: (_, { payload }) => payload,

  [toggleUser.rejected]: (_, { payload }) => payload,
  [toggleUser.pending]: () => null,
  // [toggleUserError]: (_, { payload }) => payload,
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
