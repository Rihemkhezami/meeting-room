import { combineReducers } from "redux";

import authReducer from './authReducer'
import errorsReducer from "./errorsReducer";
import equipmentReducer from "./equipmentReducer";
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";
import reservationReducer from "./reservationReducer";


export default combineReducers({
    auth: authReducer,
    errors: errorsReducer,
    equipments: equipmentReducer,
    rooms:roomReducer,
    users:userReducer,
    reservations:reservationReducer,


    

})