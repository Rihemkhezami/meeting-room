import { SET_PROFILE, SET_USERS, DELETE_USER } from "../store/types";

const initialState = {
  users: [],
//  profile: null, // Assuming profile data is an object
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload),
      };
    default:
      return state;
  }
}
