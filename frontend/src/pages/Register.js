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
import { Registration } from '../redux/actions/AuthAction';


const theme = createTheme({
    spacing: 4, // Définissez ici la valeur de votre espace de thème
    // Autres configurations de thème...
  });

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing,
  },
}));

function Register() {

  const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#091F5B' }
  const btnstyle={backgroundColor:'#091F5B'}



  const classes = useStyles();
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Registration(form, navigate));
  };

  return (
    <Grid style={{marginTop:20}}>

    <Paper style={paperStyle}>
    
        <Grid align='center' paddingBottom={2}>
            <Avatar style={avatarStyle}>
                <AddCircleOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
<div className={classes.form}>
        <form onSubmit={onSubmit}>

        <Stack spacing={2} >

        <Box display="flex" >
            <TextField 
              name="firstname"
              label='First Name' 
              placeholder="Enter your name"  
              style={{ flex: 1, marginRight: '8px' }}
              InputProps={{startAdornment: (<InputAdornment position="start"><Person2OutlinedIcon /></InputAdornment>),}} 
              variant="outlined"
              onChange={onChangeHandler}
              error={!!errors.firstname}
              helperText={errors.firstname} />
            
            <TextField  
              name="lastname"
              label='Last Name' 
              placeholder="Enter your name" 
              style={{ flex: 1 }}  
              InputProps={{startAdornment: (<InputAdornment position="start"><Person2OutlinedIcon /></InputAdornment>),}}  
              variant="outlined"
              onChange={onChangeHandler}
              error={!!errors.lastname}
              helperText={errors.lastname} />
            </Box>
            

            <TextField 
            name="email"
              fullWidth 
              label='Email' 
              placeholder="Enter your email" 
              InputProps={{startAdornment: (<InputAdornment position="start">< MailOutlineIcon /></InputAdornment>), }}
              margin="normal"
              variant="outlined"
              onChange={onChangeHandler}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField 
            name="phone"
            fullWidth 
            label='Phone Number' 
            placeholder="Enter your phone number"
            InputProps={{startAdornment: (<InputAdornment position="start"><PhoneIcon /></InputAdornment>),}} 
            variant="outlined"
            onChange={onChangeHandler}
            error={!!errors.phone}
            helperText={errors.phone}
                 />

            <TextField 
            name="password"
            fullWidth 
            label='Password' 
            type='password' 
            placeholder="Enter your password" 
            variant="outlined"
            onChange={onChangeHandler}
            error={!!errors.password}
            helperText={errors.password} 
            
            
            />


            <TextField 
            name="confirm"
              fullWidth 
              label='Confirm Password' 
              type='password' 
              placeholder="Confirm your password"
              variant="outlined"
              onChange={onChangeHandler}
              error={!!errors.confirm}
              helperText={errors.confirm}
              
              />
            
            <Button type='submit' variant='contained' style={btnstyle}>
                Sign up
            </Button>
            <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
                <Link href="/">I have an account</Link>
              </Typography>
            
            </Stack>
        
        </form>
        </div>
    </Paper>
</Grid>
  );
}

export default Register;
