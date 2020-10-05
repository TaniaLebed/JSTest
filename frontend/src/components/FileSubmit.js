import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Popover from "@material-ui/core/Popover";

import { submitPeople } from "../routes/people";

const FileSubmit = () => {
  const people = useSelector((state) => state.people);
  const [result, setResult] = useState("success");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (event) => {
    submitPeople(people).then((data) => {
      if (data.status === 200) {
        setResult("success");
      } else {
        setResult("error");
      }
    });
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#ff9800" }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 0, left: 0 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {result === "success" ? (
          <Alert severity="success" onClose={handleClose}>
            <AlertTitle>Succes</AlertTitle>
            Data is saved to database
          </Alert>
        ) : (
          <Alert severity="error" onClose={handleClose}>
            <AlertTitle>Error</AlertTitle>
            Oops, something went wrong
          </Alert>
        )}
      </Popover>
    </div>
  );
};

export default FileSubmit;
