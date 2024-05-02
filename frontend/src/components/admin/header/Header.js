import { jwtDecode } from "jwt-decode";
import React from "react";
import store from "../../../redux/store/store";
import { setAuth } from "../../../redux/util/setAuth";
import { Logout, setUser } from "../../../redux/actions/AuthAction";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";


if(window.localStorage.jwt){
    const decode = jwtDecode(window.localStorage.jwt)
    store.dispatch(setUser(decode))
    setAuth(window.localStorage.jwt)
    const currentDate = Date.now / 1000
  
    if(decode.exp >  currentDate){
     store.dispatch(Logout()) 
    }
  }


  

function Header({ title }){

    const auth = useSelector(state => state.auth)
    const user = {
      isConnected: auth.isConnected,
      role: auth.user.role
    }
    return(
        <>
{user.role=="admin"?(
    <Box display="flex" justifyContent="end" mt="0px">
    <Button type="submit" color="primary" variant="contained" to="addequipment">
    {title}
    </Button>
</Box>
) : (
    ""
)
   
}
        
</>      
    )
}

export default Header;