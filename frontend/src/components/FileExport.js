import React from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";

import Button from "@material-ui/core/Button";

const FileExport = () => {
  const file = useSelector((state) => JSON.stringify(state.people));

  const handleExport = () => {
    let blob = new Blob([file], {
      type: "application/json",
    });
    saveAs(blob);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleExport}>
        Export
      </Button>
    </div>
  );
};

export default FileExport;
