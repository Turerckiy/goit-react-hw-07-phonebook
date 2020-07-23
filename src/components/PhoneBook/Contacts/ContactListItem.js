import React from "react";
import BntFormDelete from "../Buttons/BntFormDelete";
const ContactListItem = ({ contact: { id, name, phone } }) => {
  // console.log('idContactListItem', id)
  return (
    <p className="clientName">
      {name}: {phone}
      <BntFormDelete id={id} />
    </p>
  );
};
export default ContactListItem;
