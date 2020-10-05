import {
  FILE_UPLOAD,
  TABLE_EDIT_ROW,
  TABLE_DELETE_ROW,
  TABLE_ADD_ROW,
  TABLE_FILTER_BY_COLOMN,
  TABLE_FILTER_BY_SEARCH,
} from "../constants";

const initialState = {
  people: [],
  filterSearch: "",
  filterColumn: "",
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD:
      return {
        ...state,
        people: action.payload,
      };
    case TABLE_EDIT_ROW:
      return {
        ...state,
        people: action.payload,
      };
    case TABLE_DELETE_ROW:
      return {
        ...state,
        people: action.payload,
      };
    case TABLE_ADD_ROW:
      return {
        ...state,
        people: action.payload,
      };
    case TABLE_FILTER_BY_COLOMN:
      return {
        ...state,
        filterColumn: action.payload,
      };
    case TABLE_FILTER_BY_SEARCH:
      return {
        ...state,
        filterSearch: action.payload,
      };
    default:
      return initialState;
  }
};

export default peopleReducer;
