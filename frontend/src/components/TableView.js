import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TableHeader from "./TableHeader";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import Row from "./Row";
import AddRowButton from "./AddRowButton";

import { filterByColumnAction } from "../actions/peopleActions";

const EmptyTable = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={9}>
          <div>
            <Typography variant="h4" gutterBottom>
              The table is empty now. Upload json file with data or add new row
              to the table and fill the fields. You can edit, delete and add
              rows. Then you need to export your file.
            </Typography>
          </div>
        </TableCell>
      </TableRow>
      <AddRowButton />
    </TableBody>
  );
};

const TableView = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  const filterColumn = useSelector((state) => state.filterColumn);
  const filterSearch = useSelector((state) => state.filterSearch);
  const [order, setOrder] = useState("desc");

  const compare = (a, b) => {
    let factor = 0;
    if (a[filterColumn] > b[filterColumn]) {
      factor = order === "desc" ? 1 : -1;
    }
    if (a[filterColumn] < b[filterColumn]) {
      factor = order === "desc" ? -1 : 1;
    }
    return factor;
  };

  const handleRequestSort = (event, property) => {
    const isAsc = filterColumn === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    if (filterColumn !== property) {
      dispatch(filterByColumnAction(property));
    }
  };

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHeader
              order={order}
              filterColumn={filterColumn}
              onRequestSort={handleRequestSort}
            />
            {people.length === 0 ? (
              <EmptyTable />
            ) : (
              <TableBody>
                {people
                  .filter((person) =>
                    Object.values(person)
                      .slice(1)
                      .some((value) =>
                        value.toString().toLowerCase().includes(filterSearch)
                      )
                  )
                  .sort(compare)
                  .map((row, index) => {
                    return <Row person={row} rowIndex={index} key={row.id} />;
                  })}
                <AddRowButton />
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default TableView;
