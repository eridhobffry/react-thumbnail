import * as CONSTANTS from "../constants";

const initialState = 0;

export const ChangeImage = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_IMAGE:
      return action.index;

    default:
      return state;
  }
};
