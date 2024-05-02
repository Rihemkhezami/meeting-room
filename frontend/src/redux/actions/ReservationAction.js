import { Navigate } from "react-router-dom";
import { DELETE_EQUIPMENT, DELETE_RESERV, ERRORS, SET_EQUIPMENTS, SET_RESERV, SET_RESERVS, UPDATE_RESERV } from "../store/types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { setAuth } from "../util/setAuth";
import { setUser } from "./AuthAction";
import store from "../store/store";



export const GetReservations = ()=>dispatch=>{
    axios
      .get("http://localhost:3002/reservation/")
      .then(res => {
          dispatch({
              type: SET_RESERVS,
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


export const createReservation = (form,navigate)=>dispatch=>{
    axios
      .post("http://localhost:3002/reservation/create", form)
      .then(res => {
        navigate('/reservations')
       // setMessage("Equipment added with success")
        dispatch({
            type: ERRORS,
            payload: {}
        })
        
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const DeleteReservation = (id)=>dispatch=>{
    if(window.confirm("are you sure to delete this reservation?")){
     axios
     .delete(`http://localhost:3002/reservation/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_RESERV,
             payload: id
         })
     })
     .catch(err => {
         dispatch({
             type: ERRORS,
             payload: err.response.data
         })
     });
    }
 }

