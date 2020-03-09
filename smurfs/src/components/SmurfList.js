import React, { useEffect } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf";

import { pullSmurf } from "../actions";

const SmurfList = props => {
  const { pullSmurf, editSmurf, smurfs, isFetching, error } = props;

  useEffect(() => {
    pullSmurf();
  }, [pullSmurf]);

  if (isFetching) {
    return <h1>WATCH OUT! Smurfs are on the way!</h1>;
  }

  return (
    <div>
      {smurfs.map(smurf => (
        <div>
          <Smurf key={smurf.id} smurf={smurf} editSmurf={editSmurf} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { pullSmurf })(SmurfList);
