import { SET_USER } from "../store/types";
import isEmpty from "../util/isEmpty";


const initialState = {
  isConnected: false,
  user: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isConnected: !isEmpty(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
