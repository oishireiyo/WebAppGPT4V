import React from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Axios from 'axios'

export default function CallButton(props) {
  const {cardobjects, setCardobjects, question, videoRef, ready} = props

  const canvasRef = React.useRef(null)

  async function handleClick() {
    canvasRef.current.width = videoRef.current.videoWidth
    canvasRef.current.height = videoRef.current.videoHeight

    let context = canvasRef.current.getContext("2d")
    context.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight)

    let urlimage = canvasRef.current.toDataURL('image/jpeg')
    let b64image = urlimage.split(',')[1]

    let newcardobject = {
      image: '',
      title: '',
      text: '',
    }
    newcardobject.image = urlimage
    newcardobject.title = question

    // 対象のイメージを追加する
    await Axios.post('http://127.0.0.1:5000/add_b64image_content', {'b64image': b64image})
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.error(error)
    })

    // 処理を実行する
    await Axios.get('http://127.0.0.1:5000/execute')
    .then(function(response) {
      console.log(response)
      newcardobject.text = response.data.text_in_ja
    })
    .catch(function(error) {
      console.error(error)
    })

    // 追加した写真を削除する
    await Axios.get('http://127.0.0.1:5000/delete_content')
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.error(error)
    })

    const newcardobjects = [...cardobjects, newcardobject]
    setCardobjects(newcardobjects)
  }

  return (
    <>
      <Button color='primary' variant="contained" disabled={!ready} onClick={handleClick} startIcon={<ArrowForwardIcon />}>
        処理実行
      </Button>
      <canvas ref={canvasRef} hidden />
    </>
  )
}