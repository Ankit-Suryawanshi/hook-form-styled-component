/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import {
  BodyInput, ProfileLabel, LineBreak, Label,
} from "../style";
import ProfileContext from "../../MyContext";
import Navbar from "../../container/navbar";

const Profile = (props) => {
  console.log(props);
  const data = useContext(ProfileContext)[0].userInfo || {};
  return (
    <>
      <Navbar {...props} />
      <BodyInput>
        <Label>Your Data</Label>
        <LineBreak />
        <ProfileLabel>Name : </ProfileLabel>
        <ProfileLabel>{data.name}</ProfileLabel>
        <LineBreak />
        <ProfileLabel>Role : </ProfileLabel>
        <ProfileLabel>{data.role}</ProfileLabel>
        <LineBreak />
        <ProfileLabel>Email : </ProfileLabel>
        <ProfileLabel>{data.email}</ProfileLabel>
        <LineBreak />
        <ProfileLabel>Contact : </ProfileLabel>
        <ProfileLabel>{data.contact}</ProfileLabel>
        <LineBreak />
      </BodyInput>
    </>
  );
};
export default Profile;
