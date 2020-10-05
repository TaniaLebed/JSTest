import React, { useState } from "react";
import { useDispatch } from "react-redux";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { filterBySearchAction } from "../actions/peopleActions";

const FilterSearch = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value === "") {
      dispatch(filterBySearchAction(""));
    }
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    dispatch(filterBySearchAction(searchValue));
  };

  return (
    <div>
      <InputBase
        placeholder="Search"
        type="search"
        style={{ borderBottom: "1px solid #000" }}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
      />
      <IconButton type="submit" onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default FilterSearch;
