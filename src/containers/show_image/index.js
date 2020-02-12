import { connect } from "react-redux";
import ShowImageComponent from "../../components/show_image";

const mapStateToProps = state => {
  console.log("Information container: ", state);
  return {
    imageList: state.imageList,
    index: state.index
  };
};

export default connect(mapStateToProps)(ShowImageComponent);
