import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate();
  const [loginForm,setLoginForm]=useState({email:'', password:''});
  const inputhandler=(e)=>{
    setLoginForm({...loginForm,[e.target.name]:e.target.value})
  }
  function capValue(){
    axios.post('http://localhost:3000/user/l',loginForm)
    .then((res)=>{
      alert(res.data);
      navigate('/b');
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div style={{margin:'5%'}}>
        <Typography variant='h3' style={{color:'darkgoldenrod'}}>BlogApp Login</Typography>
        <br/><br/>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" name="email" onChange={inputhandler} />
        <br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" onChange={inputhandler}/> 
        <br/><br/>
    <Button  varient="contained" onClick={capValue}> Login</Button>&nbsp;&nbsp;
    <Typography style={{color:'darkcyan'}}>
        <Link to={'/s'}>New User?Please click me</Link></Typography>
    
    </div>
)
}

export default Login