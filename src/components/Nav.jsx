import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FAKE STORE 
        </Typography>
        <Link to={'/'}>  <Button style={{ backgroundColor: 'white', color: 'black' }}>Home</Button>

        </Link>
        <Link to={'/add'}> <Button style={{ backgroundColor: 'white',borderRadius:"black",color: 'black' }}>Add</Button>

        </Link>
      </Toolbar>
    </AppBar>
  </Box>
  </>
  )
}

export default Nav

