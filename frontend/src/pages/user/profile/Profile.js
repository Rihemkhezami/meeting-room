import { jwtDecode } from "jwt-decode";
import React from "react";
import { Logout,setUser } from "../../../redux/actions/AuthAction";
import { useSelector } from "react-redux";
import store from "../../../redux/store/store";
import { setAuth } from "../../../redux/util/setAuth";
import TopBar from "../../../components/user/topbar/TopBar";
import { TextField, Button, Container, Grid, Typography, createTheme,Paper,Avatar,Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import "./profile.scss"
import Stack from '@mui/material/Stack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};


if(window.localStorage.jwt){
    const decode = jwtDecode(window.localStorage.jwt)
    store.dispatch(setUser(decode))
    setAuth(window.localStorage.jwt)
    const currentDate = Date.now / 1000
 
    if(decode.exp >  currentDate){
     store.dispatch(Logout()) 
    }
  }
  const useStyles = makeStyles((theme) => ({
    form: {
      marginTop: theme.spacing,
    },
  }));

function Profile(){
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const classes = useStyles();
  const title={fontSize: "25px",  fontWeight: "bold",  fontFamily:" 'Anton', sans-serif",textAlign:'center',marginTop:"50px",marginBottom:"10px"}

    const auth = useSelector(state => state.auth)
  const user = {
    firstname:auth.user.firstname,
    lastname:auth.user.lastname,
    email:auth.user.email,
    phone:auth.user.phone,
    isConnected: auth.isConnected,
    role: auth.user.role

  }
    return(
      <div className="page">
                    <TopBar />

      <div className="pagecontainer">
        <div className="profile" style={title}>MY PROFILE</div>
        <div className="P1">
      
          <div className="right" style={{padding: 20,width:'400px', margin: "0 auto"}}>
            <form>
              
            <Stack spacing={2} >
                <div className="formInput" style={{display:'flex'}} >
                  <TextField   
                  size="small" margin="small" id="textField" 
                  label="First Name"
                  type="text"  value={user.firstname}               style={{ flex: 1, marginRight: '8px' }}
                  focused />
                  <TextField   
                  size="small" margin="small" id="textField" 
                  label="Last Name"
                  type="text"  value={user.lastname}  focused />
                 
                </div>
                <TextField   
                  size="small" margin="small" id="textField" 
                  label="Email"
                  type="text"  value={user.email}  focused fullWidth/>

                <TextField   
                  size="small" margin="small" id="textField" 
                  label="Phone"
                  type="text"  value={user.phone}  focused fullWidth/>
              
                
                
             </Stack>
            </form>
            <div className="btnProfile">
            <button>Enregistrer</button>
            <button>Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>


      /*{
        <div>
            <TopBar />
    <div className="page">        
        <div className="pagecontainer">
        <ul>
        <li>{user.firstname}</li>
        <li>{user.lastname}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.role}</li>
       </ul>
        </div>

    </div>
    </div> 
      }*/
      
       
    )
}

export default Profile;