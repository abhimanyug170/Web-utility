import { GET_SHORT_URL, GET_SCREENSHOT, DOWNLOAD_SCREENSHOT } from "./types";
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

export const getScreenshot = formValues => {
  return async dispatch => {
    try {
      const response = await webUtilityApi.post("/get-screenshot", formValues); // "/get-short-url" is backend endpoint
      // console.log(response);
      dispatch({
        type: GET_SCREENSHOT,
        payload: response.data.image
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const downloadScreenshot = () => {
  return async dispatch => {
    try {
      const response = await webUtilityApi.get("/get-screenshot"); // "/get-short-url" is backend endpoint
      // console.log(response);
      dispatch({
        type: DOWNLOAD_SCREENSHOT
      });
    } catch (err) {
      console.log(err);
    }
  };
};
