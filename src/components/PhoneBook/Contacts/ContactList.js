import React from "react";
import ContactListItem from "./ContactListItem";
import { useSelector } from "react-redux";
const style = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: 280,
  borderRadius: "15%",
  border: "2px dotted white",
  backgroundColor: "black",
};

const ContactList = () => {
  const contactArr = useSelector((state) => state.addContact);

  return contactArr.map((contact) => (
    <div className={style} key={contact.id}>
      <ContactListItem contact={contact} />
    </div>
  ));
};
export default ContactList;
