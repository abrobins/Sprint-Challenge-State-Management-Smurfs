import {
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE,
  PUT_SMURF_START,
  PUT_SMURF_SUCCESS,
  PUT_SMURF_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      };

    case POST_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };

    case PUT_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case PUT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
