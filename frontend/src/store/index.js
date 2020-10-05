import { createStore, applyMiddleware } from "redux";
import peopleReducer from "../reducers/peopleReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(peopleReducer, applyMiddleware(thunk, logger));

export default store;
