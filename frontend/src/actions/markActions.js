import axios from "axios";
import {
    USER_MARK_REQUEST,
    USER_MARK_SUCCESS,
    USER_MARK_FAIL,
  } from "../constants/userConstants";

import {APIKEY} from "../credentials";

  export const listMarkDetails = (place) => async (dispatch) => {
    try {
      dispatch({ type:  USER_MARK_REQUEST });
  
      const { data } = await axios.get(`https://maps.googleapis.com/maps/api/${place}/autocomplete/json?input=ALL&types=geocode&key=${APIKEY}`);
  
      dispatch({
        type: USER_MARK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_MARK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };