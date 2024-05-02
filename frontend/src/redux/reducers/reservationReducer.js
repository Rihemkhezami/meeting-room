import {DELETE_RESERV, SET_RESERV, SET_RESERVS, UPDATE_RESERV } from "../store/types";

const intitialState = {
  reservations: [],
  reservation: {},
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_RESERV:
      return {
        ...state,
        reservation: action.payload,
      };
    case SET_RESERVS:
      return {
        ...state,
        reservations: action.payload,
      };
     case DELETE_RESERV:
        return {
          ...state,
          reservations: state.reservations.filter(p =>p._id !== action.payload),
        };  
       

    default:
      return state;
  }
}
