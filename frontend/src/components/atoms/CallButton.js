import React from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Axios from 'axios'

export default function CallButton(props) {
  const {videoRef, ready} = props

  const [texts, setTexts] = React.useState([])
  const [urlimages, setUrlImages] = React.useState([])

  const canvasRef = React.useRef(null)

  async function handleClick() {
    canvasRef.current.width = videoRef.current.videoWidth
    canvasRef.current.height = videoRef.current.videoHeight

    let context = canvasRef.current.getContext("2d")
    context.drawImage(videoRef.current, 0, 0, videoRef.current.videoWidth, videoRef.current.videoHeight)

    let urlimage = canvasRef.current.toDataURL('image/jpeg')
    let b64image = urlimage.split(',')[1]
    const newurlimages = [...urlimages, urlimage]
    setUrlImages(newurlimages)

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
      const newtexts = [...texts, response.data.text_in_ja]
      setTexts(newtexts)
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
  }

  return (
    <>
      <Button color='primary' variant="contained" disabled={!ready} onClick={handleClick} startIcon={<ArrowForwardIcon />}>
        処理実行
      </Button>
      <canvas ref={canvasRef} hidden />
      {/*{
        urlimages.map(function(urlimage, index) {
          return (<img key={`image-${index}`} src={urlimage} alt={`alt-image-${index}`} width={videoRef.current.videoWidth} height={videoRef.current.videoHeight} /> )
        })
      }*/}
      {
        texts.map(function(text, index) {
          return (<h2>{index}: {text}</h2>)
        })
      }
    </>
  )
}