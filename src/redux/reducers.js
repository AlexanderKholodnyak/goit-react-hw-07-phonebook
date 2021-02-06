import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact, changeFilter } from './actions';
// import listOfContact from '../components/Contacts/contacts.json';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  changeFilter,
} from './actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

// const error = createReducer(null, {
//     [fetchContactError]: (_, action) => action.payload,
//     [fetchContactRequest]: () => null,
//     [addContactRequest]:() => null,
//     [deleteContactRequest]:() => null,
//     [deleteContactError]: (_, action) => action.payload,
//     [addContactError]: (_, action) => action.payload,
// });

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

// const initialContactlist = listOfContact;

// const items = createReducer(initialContactlist, {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (state, { payload }) => payload,
// });

export default combineReducers({
  items,
  filter,
  loading,
});
