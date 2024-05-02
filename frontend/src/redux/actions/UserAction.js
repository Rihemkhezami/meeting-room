import axios from "axios";
import {ERRORS,SET_USERS } from "../store/types";




export const GetUsers = ()=>dispatch=>{
    axios
      .get("http://localhost:3002/api/users")
      .then(res => {
          dispatch({
              type: SET_USERS,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}








