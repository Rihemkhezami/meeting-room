import axios from 'axios';
import { ERRORS,SET_USER } from '../store/types';
import {jwtDecode} from 'jwt-decode';
import { setAuth } from '../util/setAuth';

export const Registration = (form, navigate)=>dispatch=>{
    axios.post('http://localhost:3002/user/register', form) 
    .then(res=>{
      navigate('/')
      dispatch({
          type: ERRORS,
          payload: {}
      })
    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const LoginAction = (form, navigate)=>dispatch=>{
    axios.post('http://localhost:3002/user/login', form) 
    .then(res=>{
      const {token} = res.data;
     // navigate('/page')
      localStorage.setItem('jwt', token);
      const decode = jwtDecode(token);
      dispatch(setUser(decode));
      setAuth(token)

      if (decode.role === "admin") {
        navigate('/dashboard'); // Rediriger vers le tableau de bord pour les administrateurs
      } else {
        navigate('/allrooms'); // Rediriger vers la page d'accueil pour les autres utilisateurs
      }


    })
    .catch(err=>{
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    })
}

export const Logout = ()=>dispatch=>{
    localStorage.removeItem('jwt')
    dispatch({
        type: SET_USER,
        payload: {}
    })
}

export const setUser = (decode)=>({
    type: SET_USER,
    payload: decode
})