import React from "react";

import FileExport from "./FileExport";
import FileUpload from "./FileUpload";
import FileSubmit from "./FileSubmit";
import TableView from "./TableView";
import FilterSearch from "./FilterSearch";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Grid container direction="column" alignItems="flex-end" spacing={2}>
          <Grid item>
            <FilterSearch />
          </Grid>
          <Grid item>
            <TableView />
          </Grid>
          <Grid item container alignItems="flex-start" spacing={2}>
            <Grid item>
              <FileUpload />
            </Grid>
            <Grid item>
              <FileExport />
            </Grid>
            <Grid item>
              <FileSubmit />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
