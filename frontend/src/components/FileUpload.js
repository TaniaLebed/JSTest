import React from "react";
import { useDispatch } from "react-redux";

import { getDataAction } from "../actions/peopleActions";

import Button from "@material-ui/core/Button";

const FileUpload = () => {
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      dispatch(getDataAction(JSON.parse(reader.result)));
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input
        id="button-file"
        accept=".json"
        type="file"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <label htmlFor="button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </div>
  );
};

export default FileUpload;
