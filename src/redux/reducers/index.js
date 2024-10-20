

import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Adjust the path as needed
import movieReducer from "./movieReducer"; // Adjust the path as needed

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
});

export default rootReducer;
