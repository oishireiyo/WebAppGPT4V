import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function RoleRadio(props) {
  const {role, setRole} = props

  function handleChange(event) {
    setRole(event.target.value)
  }

  return (
    <FormControl>
      <FormLabel>Roleの選択</FormLabel>
      <RadioGroup
        row
        value={role}
        onChange={handleChange}
      >
        <FormControlLabel value="user" control={<Radio />} label="user" />
        <FormControlLabel value="system" control={<Radio />} label="system" />
        <FormControlLabel value="assistant" control={<Radio />} label="assistant" />
      </RadioGroup>
    </FormControl>
  )
}