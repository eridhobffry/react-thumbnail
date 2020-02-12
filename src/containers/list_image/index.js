import { connect } from "react-redux";
import ListImageComponents from "../../components/list_image";
import { changeImage } from "../../actions/change_image";

const mapStateToProps = state => {
  console.log("Image change on click container mapstatetoProps: ", state);
  return {
    imageList: state.imageList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIndexShowImage: index => {
      dispatch(changeImage(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListImageComponents);
