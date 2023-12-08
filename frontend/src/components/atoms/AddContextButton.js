import React from 'react'
import Button from '@mui/material/Button'
import Axios from 'axios'

export default function AddContextButton(props) {
  const {role, message, doTranslate, ready, setReady} = props

  async function handleClick() {
    await Axios.post('/add_message_entry', {'role': role})
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })

    await Axios.post('/add_text_content', {'text': message, 'doTranslate': doTranslate})
    .then(function(response) {
      console.log(response)
      setReady(true)
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  return (
    <Button color='primary' variant='contained' disabled={ready} onClick={handleClick}>
      質問を設定
    </Button>
  )
}