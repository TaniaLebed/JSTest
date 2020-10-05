import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import DeleteRowButton from "./DeleteRowButton";

import { editRowAction } from "../actions/peopleActions";

const Row = ({ person, rowIndex }) => {
  const dispatch = useDispatch();

  const [id] = useState(person.id);
  const [name, setName] = useState(person.name);
  const [age, setAge] = useState(person.age);
  const [gender, setGender] = useState(person.gender);
  const [company, setCompany] = useState(person.company);
  const [email, setEmail] = useState(person.email);
  const [phone, setPhone] = useState(person.phone);
  const [address, setAddress] = useState(person.address);

  const [editable, setEditable] = useState(false);

  const handleChange = (event, setFunction, numeric = false) => {
    let value = numeric ? +event.target.value : event.target.value;
    setFunction(value);
  };

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
    let editedPerson = {
      id,
      name,
      age,
      gender,
      company,
      email,
      phone,
      address,
    };
    dispatch(editRowAction(rowIndex, editedPerson));
  };

  return (
    <TableRow hover key={person.id}>
      <TableCell>{rowIndex + 1}</TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="text"
          defaultValue={person.name}
          disabled={!editable}
          onChange={(event, setFunction = setName) =>
            handleChange(event, setFunction)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="number"
          inputProps={{ min: 0 }}
          defaultValue={person.age}
          disabled={!editable}
          onChange={(event, setFunction = setAge) =>
            handleChange(event, setFunction, true)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="text"
          defaultValue={person.gender}
          disabled={!editable}
          onChange={(event, setFunction = setGender) =>
            handleChange(event, setFunction)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="text"
          defaultValue={person.company}
          disabled={!editable}
          onChange={(event, setFunction = setCompany) =>
            handleChange(event, setFunction)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="email"
          defaultValue={person.email}
          disabled={!editable}
          onChange={(event, setFunction = setEmail) =>
            handleChange(event, setFunction)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="tel"
          defaultValue={person.phone}
          disabled={!editable}
          onChange={(event, setFunction = setPhone) =>
            handleChange(event, setFunction)
          }
        />
      </TableCell>

      <TableCell>
        <TextField
          variant="outlined"
          type="text"
          defaultValue={person.address}
          disabled={!editable}
          onChange={(event, setFunction = setAddress) =>
            handleChange(event, setFunction)
          }
        />
      </TableCell>

      <TableCell>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            {editable ? (
              <Button
                variant="contained"
                style={{ width: "83.4659px", backgroundColor: "#4caf50" }}
                onClick={handleSaveClick}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                style={{ width: "83.4659px" }}
                onClick={handleEditClick}
              >
                Edit
              </Button>
            )}
          </Grid>
          <Grid item>
            <DeleteRowButton rowIndex={rowIndex} />
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default Row;
