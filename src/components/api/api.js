import axios from "axios";

export const getAllContactsAPI = async () => {
  const { data } = await axios.get("http://localhost:4242/contacts");
  return data;
};

export const addContactAPI = async (contact) => {
  const { data } = await axios.post("http://localhost:4242/contacts", contact);
  return data;
};
export const delContactAPI = async (id) => {
  await axios.delete(`http://localhost:4242/contacts/${id}`);
};
