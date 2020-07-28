import { GET_SCREENSHOT } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_SCREENSHOT:
      return action.payload;
    default:
      return state;
  }
};
