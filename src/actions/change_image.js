import * as CONSTANTS from "../constants";

export const changeImage = index => {
  return {
    type: CONSTANTS.CHANGE_IMAGE,
    index
  };
};
