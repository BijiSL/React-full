import { Box, Button, Grid, Grid2, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [users,setUsers]=useState();
  const inpuhandler=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
  }
  const addhandler=()=>{
    console.log(users);
    axios.post('http://localhost:3000/user/s',users)
    .then((res)=>{
console.log(res)
    })
  .catch((error)=>{
console.log(error)
  })}
  return (
    <div>
         <Box sx={{ flexGrow: 1 }} style={{marginTop:'10%'}}>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
       <TextField id="outlined-basic" label="Name"  variant='outlined'name="name" onChange={inpuhandler}/>
        </Grid2>
        <Grid2 size={4}>
        <TextField fullWidth id="outlined-basic" label="Email"  variant='outlined' name="email" onChange={inpuhandler}/>
        </Grid2>
        <Grid2 size={12}>
        <TextField fullWidth id="outlined-multiline-flexible"
          label="Address"
          multiline
          rows={4}name="address" onChange={inpuhandler}/>
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth id="outlined-basic" label="Phone"  variant='outlined'name="phonenumber" onChange={inpuhandler}/>
        </Grid2>
        <Grid2 size={6}>
        <TextField fullWidth id="outlined-basic" label="Password"  variant='outlined'name="password" onChange={inpuhandler}/>
        </Grid2>
        <Grid2 size={12}>
        <Button variant="contained" onClick={addhandler}>SIGN UP</Button>
        </Grid2>
        <Grid2 size={12}>
        <Typography style={{color:'darkcyan'}}>
        <Link to={'/l'}>Registered User?Please click me</Link></Typography>
        </Grid2>
      </Grid2>
    </Box>
    </div>

  )
}

export default Signup