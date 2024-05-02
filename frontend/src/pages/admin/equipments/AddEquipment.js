import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Grid, Typography, createTheme,Paper,Avatar,Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createEquipment } from '../../../redux/actions/EquipmentAction';
import Navbar from '../../../components/admin/navbar/Navbar';
import Sidebar from '../../../components/admin/sidebar/Sidebar';


const theme = createTheme({
    spacing: 4, // Définissez ici la valeur de votre espace de thème
    // Autres configurations de thème...
  });

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing,
  },
}));

function AddEquipment() {

  const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#091F5B' }
  const btnstyle={backgroundColor:'#5FACD3'}



  const classes = useStyles();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);
  const navigate = useNavigate();
  const title={fontSize: "25px",  fontWeight: "bold",  fontFamily:" 'Anton', sans-serif",textAlign:'center',marginTop:"0px",marginBottom:"10px"}

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createEquipment(form, navigate));
  };

  return (
    <div style={{ height: "100%" }} >
      <div className="navCSS">
        <Navbar />
      </div>
      <div className="page">
        <div className="sidebarCSS">
          <Sidebar />
        </div>
        <div className="pagecontainer"  >
        

    <Paper style={paperStyle}>
    <div className="profile" style={title}>Add Equipment</div>

       
<div className={classes.form}>
        <form onSubmit={onSubmit}>

        <Stack spacing={2} >

       
            <TextField 
              name="name"
              label='Name' 
              placeholder="Enter equipment name"  
              style={{ flex: 1, marginRight: '8px' }}
              variant="outlined"
              onChange={onChangeHandler}
              error={!!errors.name}
              helperText={errors.name} />
            
           
            

            <TextField 
            name="description"
              fullWidth 
              label='Description' 
              placeholder="Enter equipment description " 
              margin="normal"
              variant="outlined"
              onChange={onChangeHandler}
              error={!!errors.description}
              helperText={errors.description}
            />

            <TextField 
            name="stock"
            fullWidth 
            label='Stock' 
            placeholder="Enter equipment stock"
            variant="outlined"
            onChange={onChangeHandler}
            error={!!errors.stock}
            helperText={errors.stock}
                 />

            
            
            <Button type='submit' variant='contained' style={btnstyle}>
                Add Equipment
            </Button>

           
            
            </Stack>
        
        </form>
        </div>
    </Paper>
    </div>
    </div>
    </div>
  );
}

export default AddEquipment;
