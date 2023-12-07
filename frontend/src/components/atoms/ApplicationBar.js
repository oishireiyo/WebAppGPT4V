import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function ApplicationBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>
          GPT-4 with vision
        </Typography>
      </Toolbar>
    </AppBar>
  )
}