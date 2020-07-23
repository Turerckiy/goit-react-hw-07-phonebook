import React from "react";
import AddContact from "./AddContact/AddContact";
// import ContactList from "./Form/AddContact";
import FilterContact from "./FilterContact/FilterContact";
import Contacts from "./Contacts/Contacts";
console.log("AddContact", AddContact);
console.log("FilterContactAPPPPPPPPP", FilterContact);
const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
      width: 280,
      border: "2px dotted white",
      backgroundColor: "black",
    }}
  >
    {/* { (FindedContact) ?  <FindedContact /> : <Contacts /> } */}

    <AddContact />
    <FilterContact />
    <br />
    <Contacts />
  </div>
);

export default App;
