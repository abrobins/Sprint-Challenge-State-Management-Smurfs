import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE";

export const PUT_SMURF_START = "PUT_SMURF_START";
export const PUT_SMURF_SUCCESS = "PUT_SMURF_SUCCESS";
export const PUT_SMURF_FAILURE = "PUT_SMURF_FAILURE";

export const pullSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("res", res);
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const newSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("post res", res);
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("err", err);
    });
};

export const editSmurf = smurf => dispatch => {
  dispatch({ type: PUT_SMURF_START });

  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("err", err);
    });
};
