import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContactListItem from "../Contacts/ContactListItem";

const FilterContact = () => {
  const [filter, setfilter] = useState("");
  const [filteredState, setfilteredContacts] = useState([]);
  const contactArr = useSelector((state) => state.addContact);
  // const state = useSelector((state) => state);
  const filteredContacts = (contactArr, filter) =>
    contactArr.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  useEffect(() => {
    if (contactArr.length !== 0 && filter !== "") {
      setfilteredContacts(filteredContacts(contactArr, filter));
    }
  }, [filter]);
  const handleChangeFilter = ({ target: { value } }) => {
    setfilter(value);
  };
  return (
    <>
      <input
        type="text"
        placeholder={"Enter name to Saerch..."}
        value={filter}
        onChange={handleChangeFilter}
      />
      {filteredState.length !== 0 &&
        filter !== "" &&
        filteredState.map((contact) => (
          <div key={contact.id}>
            <ContactListItem contact={contact} />
          </div>
        ))}
    </>
  );
};
export default FilterContact;
