/* eslint-disable indent */
import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const NavbarStyled = styled.div`
  background: ${(props) => (props.image ? "#498EF9" : "#6992c2")};
  width: 100%;
  height: ${(props) => (props.image ? "715px" : "50px")};
  padding: 10px;
  vertical-align: middle;
`;

export const NavbarCenter = styled.div`
  font-size: 22px;
  position: relative;
  top: 25%;
  width: 100%
`;

export const NavLabel = styled.div`
  display: inline;
  //position: relative;
  align-item: ${(props) => (props.right ? "right" : "left")};
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 0.2em;
  margin-left: 12px;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  //position: relative;
  left: 1200px;
  top: -10px;
  cursor: pointer;
`;

export const Input = styled.input.attrs((props) => ({
  type: "email",
  size: props.size || "0.8em",
  }))`
  border: 1px solid #C7B5A4;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  width: 90%;
  border-radius: 5px;
`;

export const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
`;

export const BodyInput = styled.div`
  width: 450px;
  margin: auto;
  margin-top: 150px;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
`;

export const Label = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const ProfileLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 50px;
`;

export const LineBreak = styled.hr`
`;

export const FormLabel = styled.h4`
  margin-bottom: 5px;
  margin-left: 10px
`;

export const RequiredSpan = styled.span`
  color: red;
  margin-left: 10px;
`;

export const Form = styled.form`
  width: 100%;
`;
