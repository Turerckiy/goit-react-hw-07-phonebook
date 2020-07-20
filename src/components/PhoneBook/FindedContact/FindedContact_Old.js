import React, { Component } from "react";
import { connect } from "react-redux";

import ContactList from "../Contacts/ContactList";

const initialState = {
  filter: "",
  filteredClients: [],
};

class FindedContact extends Component {
  state = initialState;
  async componentDidUpdate(prevProps, prevState) {
    const filteredClients = await this.userSelector(
      this.props.clients,
      this.state.filter
    );
    if (prevState.filter === this.state.filter) return;
    this.setState((state) => ({ ...state, filteredClients }));
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };
  userSelector = (clients, filter) =>
    clients.filter((client) =>
      client.name.toLowerCase().includes(filter.toLowerCase())
    );
  render() {
    console.log("this.props", this.props);
    return (
      <>
        <input
          type="text"
          placeholder={"Enter name to Saerch..."}
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <div>
          <ContactList clientsFromSearch={this.state.filteredClients}/>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    clients: state.appReducer,
    filter: state.appReducer.filter,
    filteredClients: state.appReducer.filteredClients,
  };
};



export default connect(mapStateToProps)(FindedContact);