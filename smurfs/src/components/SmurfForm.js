import React, { useState } from "react";
import { connect } from "react-redux";

import { newSmurf } from "../actions";

const SmurfForm = props => {
  const { newSmurf, smurfs, isFetching, error } = props;
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    newSmurf(smurf);
    setSmurf({ name: "", age: "", height: "" });
  };

  if (isFetching) {
    return <h3>Adding New Smurf</h3>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add A Smurf</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="Smurf Name"
            value={smurf.name}
            onChange={handleChanges}
          />
        </p>
        <p>
          <input
            type="number"
            name="age"
            placeholder="Smurf Age"
            value={smurf.age}
            onChange={handleChanges}
          />
        </p>
        <p>
          <input
            type="text"
            name="height"
            placeholder="Smurf Height (cm)"
            value={smurf.height}
            onChange={handleChanges}
          />
        </p>
        <button type="submit">Add New Smurf</button>
      </form>
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

export default connect(mapStateToProps, { newSmurf })(SmurfForm);
