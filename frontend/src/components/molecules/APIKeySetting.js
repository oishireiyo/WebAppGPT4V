import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Axios from 'axios'

export default function APIKeySetting(props) {
  const {tool} = props

  const [text, setText] = React.useState('')
  const [valid, setValid] = React.useState(true)

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleClick() {
    console.log(text)

    Axios.post(`/set_${tool}_api_key`, {'api_key': text})
    .then(function(response) {
      console.log(response)
      setValid(response.data.result)
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  return (
    <div className="m-4 space-y-4">
      <Typography variant="h4">
        {tool} API Keyを入力してください。
      </Typography>
      <TextField
        color="primary"
        variant="outlined"
        label={`${tool} API Keyを入力してください。`}
        fullWidth
        onChange={handleChange}
      />
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex-none">
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
            size="large"
          >
            設定を反映
          </Button>
        </div>
        <div>
          {valid ?
            <CheckCircleOutlineIcon
              fontSize="large"
              color="primary"
            /> :
            <HighlightOffIcon
              fontSize="large"
              color="error"
            />
          }
        </div>
      </div>
    </div>
  )
}