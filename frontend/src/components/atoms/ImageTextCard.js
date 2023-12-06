import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function ImageTextCard(props) {
  const {cardobject, index} = props

  return (
    <Card>
      <CardMedia
        component="img"
        image={cardobject.image}
        alt='Image'
      />
      <CardContent>
        <Typography variant='h5'>
          {cardobject.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {cardobject.text}
        </Typography>
      </CardContent>
    </Card>
  )
}