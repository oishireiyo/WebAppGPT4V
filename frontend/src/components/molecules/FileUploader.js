import React from 'react'
import Stack from "@mui/material/Stack"
import Button from '@mui/material/Button'
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function FileUploader(props) {
  const {file, setFile} = props

  const inputRef = React.useRef(null)

  function handleClickSelect() {
    console.log('Select a file')
    inputRef.current.click()
  }

  function handleChangeFile(event) {
    const files = event.target.files
    console.log('handleChangeFile')
    if (files && files[0]) {
      setFile(files[0])
      console.log(files[0])
    }
  }

  function handleClickSubmit() {
    console.log('In case any API is needed.')
  }

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Button color="primary" variant='contained' endIcon={<FileUploadIcon />} onClick={handleClickSelect}>
        ファイルの選択
      </Button>
      <input type="file" accept="video/mp4" hidden onChange={handleChangeFile} ref={inputRef}/>
    </Stack>
  )
}