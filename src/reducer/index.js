import { SET_LOGED_USER } from "../actions";

const initialState = {};
const appData = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGED_USER:
      return { ...state, profileData: action.data };
    default:
      return state;
  }
};

export default appData;
