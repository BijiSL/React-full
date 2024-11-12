import { Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blogs = () => {
// const data=[{blogname:'Foodblog',blogimg:'Food blog',blogdesc:'Food Blog'},
//     {blogname:'Travelblog',blogimg:'Travel blog',blogdesc:'Travel Blog'},
//     {blogname:'Movieblog',blogimg:'Movie blog',blogdesc:'Movie Blog'}
// ];

const [blog,setblog]=useState([]);
useEffect(()=>{
  axios.get('http://localhost:3000/blog/get')
  .then((res)=>{
    // console.log(res);
    setblog(res.data);
  }).catch((error)=>{
console.log(error)
  })
},[])

  return (
    <div>
    <Grid2 container spacing={2} style={{marginTop: "3%"}}>
      {blog.map((row)=>(
        <Grid2 size={4}>
          <Card fullWidth>
            <CardMedia
            sx={{ height: 140 }}
            image={row.image}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{row.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{row.description}</Typography>
              </CardContent>
              <Button variant='contained'color='warning' style={{margin:'5px'}}>update</Button>
              <Button variant='contained'color='success'>delete</Button>
          </Card>
        </Grid2>
      ))}  
    </Grid2>
  </div>
)
}

export default Blogs