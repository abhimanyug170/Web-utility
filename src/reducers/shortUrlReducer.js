import { GET_SHORT_URL } from "../actions/types";

const INITIAL_STATE = {
  shortUrl: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SHORT_URL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
