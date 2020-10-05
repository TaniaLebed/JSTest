import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

import { addRowAction } from "../actions/peopleActions";

const AddRowButton = () => {
  const dispatch = useDispatch();
  const filterSearch = useSelector((state) => state.filterSearch);

  const handleAddClick = () => {
    const id =
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2) +
      Math.floor(Math.random() * 100);

    const emptyObject = {
      id,
      name: "",
      age: 0,
      gender: "",
      company: "",
      email: "",
      phone: "",
      address: "",
    };

    dispatch(addRowAction(emptyObject));
  };

  return (
    <TableRow>
      <TableCell align="right" colSpan={9}>
        <Button
          variant="contained"
          style={{ width: "83.4659px", backgroundColor: "#2196f3" }}
          disabled={!!filterSearch}
          onClick={handleAddClick}
        >
          Add
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AddRowButton;
