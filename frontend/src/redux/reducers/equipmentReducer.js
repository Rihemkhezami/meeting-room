import { DELETE_EQUIPMENT, SET_EQUIPMENT, SET_EQUIPMENTS } from "../store/types";

const intitialState = {
  equipments: [],
  equipment: [],
};
export default function (state = intitialState, action) {
  switch (action.type) {
    case SET_EQUIPMENT:
      return {
        ...state,
        equipment: action.payload,
      };
    case SET_EQUIPMENTS:
      return {
        ...state,
        equipments: action.payload,
      };
     case DELETE_EQUIPMENT:
        return {
          ...state,
          equipments: state.equipments.filter(p =>p._id !== action.payload),
        };  

    default:
      return state;
  }
}
