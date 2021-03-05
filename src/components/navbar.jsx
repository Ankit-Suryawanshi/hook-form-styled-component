/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React, { useContext } from "react";
// import { withRouter } from "react-router-dom";
import {
  NavbarStyled, NavbarCenter, NavLabel, Button,
} from "./style";
import { useHandleLogout, useFetchDeveloperData, useFetchTaskData } from "./navbarLogic";
import ProfileContext from "../MyContext";

const Navbar = (props) => {
  const { loginStateChange } = useHandleLogout();
  const { showingDeveloper } = useFetchDeveloperData();
  const { showTask } = useFetchTaskData();
  const auth = useContext(ProfileContext)[0].token;

  return (
    <>
      <NavbarStyled>
        <NavbarCenter>
          <NavLabel> Task Management </NavLabel>
          {auth ? (
            <>
              <Button primary onClick={() => console.log("show profile")}>
                Profile
              </Button>
              <Button primary onClick={() => showTask(props)}>
                Show Task
              </Button>
              <Button primary onClick={() => showingDeveloper(props)}>
                Show Developer
              </Button>
              <Button primary onClick={() => loginStateChange(props)}>
                Logout
              </Button>
            </>
          ) : (
            <Button primary onClick={" "}>
              Signup
            </Button>
          )}
        </NavbarCenter>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
