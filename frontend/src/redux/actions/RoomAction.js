import {  DELETE_ROOM, ERRORS,  SET_ROOMS } from "../store/types";
import axios from "axios";


export const createRoom = (form, setShow, setMessage)=>dispatch=>{
    axios
      .post("http://localhost:3002/room/create", form)
      .then(res => {
        setShow(true)
        setMessage("Room added with success")
        dispatch({
            type: ERRORS,
            payload: {}
        })
        setTimeout(() => {
            setShow(false)
        }, 4000);
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

export const GetRooms = ()=>dispatch=>{
    axios
      .get("http://localhost:3002/room/")
      .then(res => {
          dispatch({
              type: SET_ROOMS,
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

export const DeleteRoom = (id)=>dispatch=>{
    if(window.confirm("are you sure to delete this room?")){
     axios
     .delete(`http://localhost:3002/room/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_ROOM,
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