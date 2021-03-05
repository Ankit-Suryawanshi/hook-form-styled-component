import { connect } from "react-redux";
import { requestDeveloper, requestProfile, requestTask } from "../../actions/index";
// eslint-disable-next-line import/extensions
import Navbar from "../../components/navbar.jsx";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = {
  requestTask,
  requestProfile,
  requestDeveloper,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
