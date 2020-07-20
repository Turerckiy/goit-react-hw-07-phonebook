import React from "react";
import AddContact from "./Form/AddContact";
import  FindedContact  from "./FindedContact/FindedContact";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: 280,
      border: "2px dotted white",
      backgroundColor: "black",
    }}
  >
    <AddContact />
    <FindedContact />
  </div>
);

export default App;