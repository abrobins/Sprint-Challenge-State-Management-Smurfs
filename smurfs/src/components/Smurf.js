import React from "react";

const Smurf = props => {
  console.log("smurf props", props);
  const { name, age, height, id } = props.smurf;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>ID: {id}</p>
    </div>
  );
};

export default Smurf;
