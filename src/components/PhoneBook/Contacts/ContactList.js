import React from "react";
import ContactListItem from "./ContactListItem";
import { connect } from "react-redux";
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

const ContactList = (props) => {
  const { clients, filteredContacts } = props;
  return filteredContacts.length === 0
    ? clients.map((client) => (
        <div className={style} key={client.id}>
          <ContactListItem client={client} />
        </div>
      ))
    : filteredContacts.map((client) => (
        <div className={style} key={client.id}>
          <ContactListItem client={client} />
        </div>
      ));
};

const mapStateToProps = (state) => {
  return {
    clients: state.appReducer.appReducer,
    filteredContacts: state.appReducer.filteredReducer,
  };
};

export default connect(mapStateToProps)(ContactList);