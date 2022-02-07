import {
  USER_MARK_REQUEST,
  USER_MARK_SUCCESS,
  USER_MARK_FAIL,
} from "../constants/userConstants";



export const userMarkReducer = (state = { mark: {} }, action) => {
  switch (action.type) {
    case USER_MARK_REQUEST:
      return { ...state, loading: true };
    case USER_MARK_SUCCESS:
      return { loading: false, mark: action.payload };
    case USER_MARK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
