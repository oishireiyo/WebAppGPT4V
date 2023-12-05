import React from 'react'
import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function TranslateSwitch(props) {
  const {doTranslate, setDoTranslate} = props

  function handleChange(event) {
    setDoTranslate(event.target.checked)
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            color='primary'
            defaultChecked
            onChange={handleChange}
          />
        }
        label={`翻訳機能: ${doTranslate ? '有効' : '無効'}`}
      />
    </FormGroup>
  )
}