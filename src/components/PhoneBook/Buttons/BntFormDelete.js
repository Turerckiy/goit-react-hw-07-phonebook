import React from "react";
import { useDispatch } from "react-redux";
import operations from "../redux/operations/operations";
const BntFormDelete = ({ id }) => {

  // const state = useSelector((state) => state.addContact);
  const dispatch = useDispatch();

  return (
    <button
      style={{ margin: 10, width: 50, height: 25, border: "2px dotted white" }}
      onClick={() => dispatch(operations.deleteContacts(id))}
    >
      Delete
    </button>
  );
};
export default BntFormDelete;
