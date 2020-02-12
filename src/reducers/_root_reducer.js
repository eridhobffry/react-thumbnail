import { combineReducers } from "redux";
import { ChangeImage } from "./change_image_reducer";
import { ListImage } from "./list_image_reducer";

const RootReducer = combineReducers({
  imageList: ListImage,
  index: ChangeImage
});

export default RootReducer;
