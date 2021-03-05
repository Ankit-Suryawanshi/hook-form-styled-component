import { useContext } from "react";
// import axios from "axios";
import ProfileContext from "../../MyContext";

// eslint-disable-next-line import/prefer-default-export
export function useHandleLogin() {
  const [resData, setResData] = useContext(ProfileContext); // eslint-disable-line no-unused-vars
  const handleLogin = (data, props) => {
    console.log("use handle login");
    console.log(props);
    props.requestLogin(data);
    /* axios.post("http://localhost:3001/api/login", { ...data })
      .then((res) => {
        alert(res.data.message); // eslint-disable-line no-alert
        localStorage.setItem("token", res.data.token);
        const token = res.data.token;
        const userInfo = res.data.data;
        setResData({ token, userInfo });
        console.log(props.history);
        props.history.push("/profile");
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
        alert("Email or password is not correct"); // eslint-disable-line no-alert
      }); */
  };
  return { handleLogin };
}
