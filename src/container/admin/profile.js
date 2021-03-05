import { connect } from "react-redux";
import Profile from "../../components/Admin/profile";

const mapStateToProps = (state) => ({
  person: state.person,
});

export default connect(mapStateToProps)(Profile);
