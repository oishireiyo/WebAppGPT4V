import React from 'react'
import FileUploader from '../molecules/FileUploader'
import VideoPlayer from '../molecules/VideoPlayer'
import CallButton from '../atoms/CallButton'
import MessageControl from '../molecules/MessageControl'

export default function GivenVideoPlayer(props) {
  const {cardobjects, setCardobjects} = props

  const [question, setQuestion] = React.useState("この写真には何が映っていますか?")
  const [ready, setReady] = React.useState(false)
  const [file, setFile] = React.useState(null)

  const videoRef = React.useRef(null)

  return (
    <div className='space-y-2 justify-center'>
      <div>
        <FileUploader file={file} setFile={setFile}/>
      </div>
      <div>
        <VideoPlayer file={file} videoRef={videoRef}/>
      </div>
      <div>
        <MessageControl
          question={question}
          setQuestion={setQuestion}
          placeholderForm="質問を記入してください。"
          ready={ready}
          setReady={setReady}
        />
      </div>
      <div>
        <CallButton
          cardobjects={cardobjects}
          setCardobjects={setCardobjects}
          question={question}
          videoRef={videoRef}
          ready={ready}
        />
      </div>
    </div>
  )
}