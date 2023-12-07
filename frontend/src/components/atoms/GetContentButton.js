import React from 'react'
import Button from '@mui/material/Button'
import Axios from 'axios'

export default function GetContentButton() {
  const [payload, setPayload] = React.useState(null)

  function handleClick() {
    Axios.get('http://127.0.0.1:5000/get_payload')
    .then(function(response) {
      console.log(response.data.payload)
      setPayload(response.data.payload)
    })
    .catch(function(error) {
      console.error(error)
    })
  }

  return (
    <div className='text-gray-800 text-xl'>
      <Button color='primary' variant='contained' onClick={handleClick}>
        ペイロードの取得
      </Button>
      <p>{JSON.stringify(payload)}</p>
    </div>
  )
}