import {
  FILE_UPLOAD,
  TABLE_EDIT_ROW,
  TABLE_DELETE_ROW,
  TABLE_ADD_ROW,
  TABLE_FILTER_BY_COLOMN,
  TABLE_FILTER_BY_SEARCH,
} from "../constants";

const getDataAction = (data) => {
  return (dispatch) => {
    dispatch({ type: FILE_UPLOAD, payload: data });
  };
};

const editRowAction = (index, item) => {
  return (dispatch, getStore) => {
    dispatch({
      type: TABLE_EDIT_ROW,
      payload: [
        ...getStore().people.slice(0, index),
        item,
        ...getStore().people.slice(index + 1),
      ],
    });
  };
};

const deleteRowAction = (index) => {
  return (dispatch, getStore) => {
    dispatch({
      type: TABLE_DELETE_ROW,
      payload: [
        ...getStore().people.slice(0, index),
        ...getStore().people.slice(index + 1),
      ],
    });
  };
};

const addRowAction = (item) => {
  return (dispatch, getStore) => {
    dispatch({
      type: TABLE_ADD_ROW,
      payload: [...getStore().people, item],
    });
  };
};

const filterByColumnAction = (property) => {
  return (dispatch) => {
    dispatch({
      type: TABLE_FILTER_BY_COLOMN,
      payload: property,
    });
  };
};

const filterBySearchAction = (property) => {
  return (dispatch) => {
    dispatch({
      type: TABLE_FILTER_BY_SEARCH,
      payload: property,
    });
  };
};

export {
  getDataAction,
  editRowAction,
  deleteRowAction,
  addRowAction,
  filterByColumnAction,
  filterBySearchAction,
};
