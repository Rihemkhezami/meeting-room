import { DELETE_ROOM,SET_ROOM,SET_ROOMS } from "../store/types";
const intitialState = {
  rooms: [],
  room: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_ROOM:
      return {
        ...state,
        room: action.payload,
      };
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };
     case DELETE_ROOM:
        return {
          ...state,
          rooms: state.rooms.filter(p =>p._id !== action.payload),
        };  

    default:
      return state;
  }
}
