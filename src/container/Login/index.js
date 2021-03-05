import { connect } from "react-redux";
import { requestLogin } from "../../actions";
import Login from "../../components/Login/login";

const mapDispatchToProps = {
  requestLogin,
};

export default connect(null, mapDispatchToProps)(Login);
