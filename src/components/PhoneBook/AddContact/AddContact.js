import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import config from "../config.json";
import { InputForm } from "./InputForm";
import { BntFormSubmit } from "../Buttons/BntFormSubmit";
import operations from "../redux/operations/operations";

const AddContact = () => {
  const [stateName, setName] = useState("");
  const [statePhone, setPhone] = useState("");
  const contacts = useSelector((state) => state.addContact);

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };
  const handleChangePhone = ({ target: { value } }) => {
    setPhone(value);
  };
  const contactsVerification = (contacts, client) => {
    return contacts.every((client1) => {
      if (client1.name !== client.name && client1.phone !== client.phone)
        return true;
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const client = {
      name: stateName,
      phone: statePhone,
    };
    if (stateName !== "" && statePhone !== "") {
      if (contactsVerification(contacts, client)) {
        dispatch(operations.addContact(client));
      }
    }
    setName("");
    setPhone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: 300, border: "2px dotted white" }}
    >
      <InputForm
        handleChange={handleChangeName}
        value={stateName}
        config={config.inputName}
      />
      <InputForm
        handleChange={handleChangePhone}
        value={statePhone}
        config={config.inputPhone}
      />
      <BntFormSubmit />
    </form>
  );
};

export default AddContact;
