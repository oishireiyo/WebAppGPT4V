import React from 'react'
import Stack from '@mui/material/Stack'
import FileUploader from '../molecules/FileUploader'
import VideoPlayer from '../molecules/VideoPlayer'
import CallButton from '../atoms/CallButton'
import MessageControl from '../molecules/MessageControl'
import GetContentButton from '../atoms/GetContentButton'

export default function GivenVideoPlayer(props) {
  const {cardobjects, setCardobjects} = props

  const [question, setQuestion] = React.useState("この写真には何が映っていますか?")
  const [ready, setReady] = React.useState(false)
  const [file, setFile] = React.useState(null)

  const videoRef = React.useRef(null)

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <MessageControl
        question={question}
        setQuestion={setQuestion}
        placeholderForm="質問を記入してください。"
        ready={ready}
        setReady={setReady}
      />
      <FileUploader file={file} setFile={setFile}/>
      <VideoPlayer file={file} videoRef={videoRef}/>
      <GetContentButton />
      <CallButton
        cardobjects={cardobjects}
        setCardobjects={setCardobjects}
        question={question}
        videoRef={videoRef}
        ready={ready}
      />
    </Stack>
  )
}