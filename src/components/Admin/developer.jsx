/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
/* import {
  BodyInput, ProfileLabel, LineBreak, Label,
} from "../style"; */
import Navbar from "../../container/navbar";

const Developer = (props) => {
  console.log("In developer components");
  return (
    <>
      <Navbar {...props} />
    </>
  );
};

export default Developer;
