import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccsess,
  addContactError,
  delelteContact,
  filetrContact,
  getContact,
} from "../actions/createAction";
const onAddData = (state, action) => [...state, action.payload];
const onDelelteContact = (state, action) =>
  state.filter((item) => item.id !== action.payload);

const onFiletrContact = (state, action) => action.payload;
const onGetContact = (state, action) => action.payload;

const addContact = createReducer([], {
  [addContactSuccsess]: onAddData,
  [addContactError]: onAddData,
  [delelteContact]: onDelelteContact,
  [getContact]: onGetContact,
});
const loaderReducer = createReducer(false, { [addContactRequest]: () => true });

const filterReducer = createReducer("", { [filetrContact]: onFiletrContact });

export default combineReducers({ addContact, filterReducer, loaderReducer });

// {
//   "contacts": [
//     { "id": "323423r", "name": "Rosie Simpson", "phone": "459-12-56" },
//     { "id": "iwrwe2", "name": "Hermione Kline", "phone": "443-89-12" },
//     { "id": "ir43d-3", "name": "Eden Clements", "phone": "645-17-79" },
//     { "id": "idwer-4", "name": "Annie Copeland", "phone": "227-91-26" }
//   ]
// }
