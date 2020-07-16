import { GET_SHORT_URL } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_SHORT_URL:
      return action.payload;
    default:
      return state;
  }
};
