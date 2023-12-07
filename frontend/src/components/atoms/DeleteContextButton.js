import React from "react"
import Button from '@mui/material/Button'
import Axios from 'axios'

export default function DeleteContentButton(props) {
  const {ready, setReady} = props

  async function handleClick() {
    await Axios.get('http://127.0.0.1:5000/delete_content')
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })

    await Axios.get('http://127.0.0.1:5000/delete_messages')
    .then(function(response) {
      console.log(response)
      setReady(false)
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  return (
    <Button color="primary" variant='contained' disabled={!ready} onClick={handleClick}>
      質問を削除
    </Button>
  )
}