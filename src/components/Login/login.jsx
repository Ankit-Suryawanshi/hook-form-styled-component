/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-indent */
import React from "react";
import { useForm } from "react-hook-form";
import {
  BodyInput, Label, FormLabel, Input, PasswordInput, RequiredSpan, Form, Button,
} from "../style";
import Navbar from "../../container/navbar";
import { useHandleLogin } from "./loginLogic";

// eslint-disable-next-line arrow-body-style

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { handleLogin } = useHandleLogin();
  return (
    <>
      <Navbar {...props} />
      <BodyInput>
        <Label>Login Here</Label>
        <Form onSubmit={handleSubmit((data) => handleLogin(data, props))}>
          <FormLabel>Email address</FormLabel>
          <Input placeholder="Enter email" name="email" ref={register({ required: true })} />
          {errors.email && <RequiredSpan>Correct Email is required</RequiredSpan>}
          <FormLabel>Password</FormLabel>
          <PasswordInput placeholder="Enter Password" name="password" type="password" ref={register({ required: true })} />
          {errors.password && <RequiredSpan>Password is required</RequiredSpan>}
          <Button type="submit">SUBMIT</Button>
        </Form>
      </BodyInput>
    </>
  );
};

export default Login;
