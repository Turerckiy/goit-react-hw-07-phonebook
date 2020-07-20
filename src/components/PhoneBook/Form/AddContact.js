import React, { Component } from "react";
import { connect } from "react-redux";
import shortID from "shortid";

import config from "../config.json";
import { InputForm } from "./InputForm";
import { BntFormSubmit } from "../Buttons/BntFormSubmit";
import { addContact } from "../redux/actions/actions.js";
const initialState = {
  name: "",
  phone: "",
  password: "",
  gender: "",
  id: "",
};

class AddContact extends Component {
  state = { ...initialState };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  contactsVerification = (clients, client) => {
    return clients.every((client1) => {
      if (client1.name !== client.name && client1.phone !== client.phone) {
        return true;
      }
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const client = {
      ...this.state,
      date: new Date().toDateString(),
      id: shortID(),
    };

    console.log("client", client);
    if (this.state.name !== "" && this.state.phone !== "") {
      if (this.contactsVerification(this.props.clients, client)) {
        console.log(
          "!this.contactsVerification(this.props.clients, client)",
          !this.contactsVerification(this.props.clients, client)
        );
        console.log("222", 222);
        this.props.addContact(client);
      }
    }
    // this.resetForm();

    this.setState(initialState);
  };
  // resetForm = () => {
  //   this.setState(
  //     {
  //       name: "",
  //       password: "",
  //       gender: "",
  //       phone: "",
  //     },
  //     () => console.log(this.state)
  //   );
  // };

  render() {
     return (
      <form
        onSubmit={this.handleSubmit}
        style={{ width: 300, border: "2px dotted white" }}
      >
        <InputForm
          handleChange={this.handleChange}
          value={this.state.name}
          config={config.inputName}
        />
        <InputForm
          handleChange={this.handleChange}
          value={this.state.phone}
          config={config.inputPhone}
        />
        {/* <label>
          <select
            style={{
              width: 280,
              border: "2px dotted white",
              backgroundColor: "grey",
            }}
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label> */}
        <BntFormSubmit />
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    clients: state.appReducer.appReducer, // filter: state.appReducer.filter,};}
  };
};
const mapDispatchToProps = (dispath) => {
  return {
    addContact: (client) => dispath(addContact(client)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
