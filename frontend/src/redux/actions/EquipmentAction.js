import { Navigate } from "react-router-dom";
import { DELETE_EQUIPMENT, ERRORS, SET_EQUIPMENTS } from "../store/types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { setAuth } from "../util/setAuth";
import { setUser } from "./AuthAction";
import store from "../store/store";

export const createEquipment = (form,navigate)=>dispatch=>{
    axios
      .post("http://localhost:3002/equipment/create", form)
      .then(res => {
        navigate('/equipments')
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

export const GetEquipments = ()=>dispatch=>{
    axios
      .get("http://localhost:3002/equipment/")
      .then(res => {
          dispatch({
              type: SET_EQUIPMENTS,
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

export const DeleteEquipment = (id)=>dispatch=>{
    if(window.confirm("are you sure to delete this equipment?")){
     axios
     .delete(`http://localhost:3002/equipment/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_EQUIPMENT,
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