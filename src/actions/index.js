import { GET_SHORT_URL } from "./types";
import webUtilityApi from "../apis/web-utility-api";

export const getShortUrl = formValues => {
  return async dispatch => {
    try {
      const response = await webUtilityApi.post("/get-short-url", formValues); // "/get-short-url" is backend endpoint
      // console.log(response);
      dispatch({
        type: GET_SHORT_URL,
        payload: response.data.shortUrl
      });
    } catch (err) {
      console.log(err);
    }
  };
};
