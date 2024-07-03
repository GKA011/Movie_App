import { Button, Typography,Toolbar,Box,AppBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
    
        <Typography variant="h6" component="div"  align='left' color='white'sx={{ flexGrow: 1 }}>
          MovieApp
        </Typography>
        <Link to={'/'}> <Button style={{color:'white'}}>Addmovies</Button></Link>
        <Link to={'/view'}> <Button style={{color:'white'}}>Viewmovies</Button></Link>
    
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Navbar