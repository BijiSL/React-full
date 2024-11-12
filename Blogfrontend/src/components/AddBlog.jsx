import { Box, Button,  TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'


function AddBlog() {
  const [users,setUsers]=useState();
  const inpuhandler=(e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
  }
  const addhandler=()=>{
    console.log(users);
    axios.post('http://localhost:3000/blog/ab',users)
    .then((res)=>{
console.log(res)
    })
  .catch((error)=>{
console.log(error)
  })}

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
    <Typography variant="h4">Create a New Blog</Typography>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <TextField label="title" variant="outlined" name="title" onChange={inpuhandler} />
      <TextField label="image" variant="outlined" multiline rows={4} name='image' onClick={inpuhandler} />
      <TextField label="description" variant="outlined" multiline rows={4} name='description' onClick={inpuhandler} />
           <Button type="submit" variant="contained" color="primary" onClick={addhandler}>Add Blog</Button>
    </form>

      </Box>
);
}


export default AddBlog