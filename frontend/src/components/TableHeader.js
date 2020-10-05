import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const headCells = [
  "name",
  "age",
  "gender",
  "company",
  "email",
  "phone",
  "address",
];

const TableHeader = ({ order, filterColumn, onRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell>№</TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={index}
            sortDirection={filterColumn === headCell ? order : false}
          >
            <TableSortLabel
              active={filterColumn === headCell}
              direction={filterColumn === headCell ? order : "asc"}
              onClick={createSortHandler(headCell)}
            >
              {headCell.toUpperCase()}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
