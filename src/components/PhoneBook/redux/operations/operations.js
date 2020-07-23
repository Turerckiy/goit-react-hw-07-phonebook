// import actions from "../actions/actions";
import {
  addContactRequest,
  addContactSuccsess,
  addContactError,
  getContact,
  delelteContact,
} from "../actions/createAction";
import {
  addContactAPI,
  getAllContactsAPI,
  delContactAPI,
} from "../../../api/api";

const addContact = (contact) => (disaptch) => {
  disaptch(addContactRequest());
  addContactAPI(contact)
    .then((item) => disaptch(addContactSuccsess(item)))
    .catch((error) => disaptch(addContactError(error)));
};

const getContacts = () => (disaptch) => {
  getAllContactsAPI()
    .then((data) => disaptch(getContact(data)))
    .catch((error) => disaptch(addContactError(error)));
};

const deleteContacts = (id) => (disaptch) => {
  delContactAPI(id)
    .then(() => disaptch(delelteContact(id)))
    .catch((error) => disaptch(addContactError(error)));
};

export default { addContact, getContacts, deleteContacts };
