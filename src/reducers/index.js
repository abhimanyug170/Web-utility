import { combineReducers } from "redux";

import shortUrlReducer from "./shortUrlReducer";

export default combineReducers({
  shortUrl: shortUrlReducer
});
