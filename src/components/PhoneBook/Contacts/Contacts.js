import React, {  useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "./ContactList";
import operations from "../redux/operations/operations";

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getContacts());
  }, []);
  // return 111;
  return <ContactList />;
};
export default Contacts;
