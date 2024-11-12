import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   
         <Box sx={{ flexGrow: 1 }}style={{marginTop:'0'}}>
      <AppBar position="static">
        <Toolbar>
             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'0'}}>
            My Blog App
          </Typography>
                   <Button color="inherit" href="/b">Home</Button>
             <Button color="inherit" href="/ab">Add Blog</Button>
            <Button color="inherit" href="/l">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
 
  )
}

export default Navbar