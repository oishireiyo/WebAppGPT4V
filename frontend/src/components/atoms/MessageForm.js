import React from 'react'
import TextField from '@mui/material/TextField'

export default function MessageForm(props) {
  const {message, setMessage, placeholder} = props

  function handleChange(event) {
    setMessage(event.target.value)
  }

  return (
    <TextField
      color='primary'
      fullWidth
      placeholder={placeholder}
      multiline
      onChange={handleChange}
      value={message}
    />
  )
}