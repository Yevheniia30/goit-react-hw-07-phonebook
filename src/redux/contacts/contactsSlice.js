import { createSlice } from '@reduxjs/toolkit';
import {
  getContact,
  addContact,
  deleteContact,
  toggleContact,
} from './contactsOperations';
// import { filterContact } from './contactsActions';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [getContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getContact.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.loading = false;
    },
    [getContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [addContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addContact.fulfilled]: (state, { payload }) => {
      state.contacts.push(payload);
      state.loading = false;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [deleteContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload);
      state.loading = false;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [toggleContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [toggleContact.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.map(item =>
        item.id === payload.id ? payload : item
      );
      state.loading = false;
    },
    [toggleContact.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;
