//EXAMPLE

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import { filterContact } from './contactsActions';
// import {
//   getContact,
//   addContact,
//   deleteContact,
//   toggleContact,
// } from './contactsOperations';

// const initialState = {
//   contacts: [],
//   filter: '',
//   loading: false,
//   error: null,
// };

// export const itemReducer = createReducer(initialState.contacts, {
//   [getContact.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(item => item.id !== payload),
//   [toggleContact.fulfilled]: (state, { payload }) =>
//     state.map(item => (item.id === payload.id ? payload : item)),
// });

// export const loadingReducer = createReducer(initialState.loading, {
//   [getContact.pending]: () => true,
//   [getContact.fulfilled]: () => false,
//   [getContact.rejected]: () => false,

//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,

//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,

//   [toggleContact.pending]: () => true,
//   [toggleContact.fulfilled]: () => false,
//   [toggleContact.rejected]: () => false,
// });

// export const errorReducer = createReducer(initialState.error, {
//   [getContact.rejected]: (_, { payload }) => payload,
//   [getContact.pending]: () => null,

//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,

//   [deleteContact.rejected]: (_, { payload }) => payload,
//   [deleteContact.pending]: () => null,

//   [toggleContact.rejected]: (_, { payload }) => payload,
//   [toggleContact.pending]: () => null,
// });

// export const filterReducer = createReducer(initialState.filter, {
//   [filterContact]: (_, { payload }) => payload,
// });

// export const reducer = combineReducers({
//   item: itemReducer,
//   filter: filterReducer,
//   loading: loadingReducer,
//   error: errorReducer,
// });
