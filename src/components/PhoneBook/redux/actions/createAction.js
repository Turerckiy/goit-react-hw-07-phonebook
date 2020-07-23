import { createAction } from "@reduxjs/toolkit";
// import types from "./actionTipes";

export const addContactRequest = createAction("Contcat/addRequest");
export const addContactError = createAction("Contcat/addError");

export const addContactSuccsess = createAction("Contcat/addSuccsess");
export const delelteContact = createAction("Contact/delelteSuccsess");
export const filetrContact = createAction("Contact/filetrContact");

export const getContact = createAction("Contact/getContact");

// export default { addContactRequest, addContactSuccsess, addContactError };

// import { createAction } from '@reduxjs/toolkit';

// const increment = createAction('timer/increment');
// console.log(increment(5)); // {type: "timer/increment", payload: 5}

// export const addContact = (contact) => {
//   return {
//     type: types.ADD_CONTACT,
//     payload: {
//       contact,
//     },
//   };
// };

// export const delComponent = (contacts, id) => {
//   return {
//     type: types.DELETE_CONTACT,
//     payload: id,
//   };
// };

// export const onFilterContact = (filterContact) => {
//   console.log("filterContact", filterContact);
//   return {
//     type: types.FILTER_CONTACT,

//     payload: filterContact,
//   };
// };
// export const onClearArray = () => {
//   return {
//     type: types.CLEAR_ARRAY,
//   };
// };
