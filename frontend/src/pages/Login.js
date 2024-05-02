import React, { useState } from 'react';
import { LoginAction } from "../redux/actions/AuthAction";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Grid, Typography, createTheme,Avatar,Link,Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';




const theme = createTheme({
    spacing: 4, // Définissez ici la valeur de votre espace de thème
    // Autres configurations de thème...
  });

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing,
  },
}));


function Login (){


  const paperStyle={padding :20,height:'65vh',width:400, margin:"45px auto"}
    const avatarStyle={backgroundColor:'#091F5B'}
    const btnstyle={margin:'8px 0',backgroundColor:'#091F5B'}

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
    dispatch(LoginAction(form, navigate));
  };




    return(
      <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle} ><LockOutlinedIcon  size='large' /></Avatar>
                    <h2>Sign In</h2>
                </Grid>


                <form onSubmit={onSubmit}>
                <Stack spacing={2} >

                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email" 
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={onChangeHandler}
                  error={!!errors.email}
                  helperText={errors.email}
                    />

                <TextField 
                name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={onChangeHandler}
                  error={!!errors.password}
                  helperText={errors.password} />    
                    
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' backgroundColor="#2E4053" variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/register" >
                        Sign Up 
                </Link>
                </Typography>
                </Stack>
                </form>
            </Paper>
        </Grid>
       
    )

}

export default Login;

/*
 <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <div className={classes.form}>
              <Typography variant="h4" align="center" gutterBottom>
                Register
              </Typography>
              <form onSubmit={onSubmit}>
                
                
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={onChangeHandler}
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={onChangeHandler}
                  error={!!errors.password}
                  helperText={errors.password}
                />
                
                <Button type="submit" variant="contained" color="primary">
                  SIGN IN
                </Button>
                <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
                  <Link to="/login">I don't have an account</Link>
                </Typography>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>

*/