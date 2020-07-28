import { combineReducers } from "redux";

import shortUrlReducer from "./shortUrlReducer";
import screenshotReducer from "./screenshotReducer";

export default combineReducers({
  shortUrl: shortUrlReducer,
  screenshot: screenshotReducer
});
