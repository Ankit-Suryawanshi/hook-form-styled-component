/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
/* import {
  BodyInput, ProfileLabel, LineBreak, Label,
} from "../style"; */
import Navbar from "../../container/navbar";

const Task = (props) => {
  console.log("In developer components");
  return (
    <>
      <Navbar {...props} />
      <h1>In Developer Component</h1>
    </>
  );
};

export default Task;
