import React from 'react'
import Stack from '@mui/material/Stack'
import MessageForm from '../atoms/MessageForm'
import RoleRadio from '../atoms/RoleRadio'
import TranslateSwitch from '../atoms/TranslateSwitch'
import AddContextButton from '../atoms/AddContextButton'
import DeleteContentButton from '../atoms/DeleteContextButton'

export default function MessageControl(props) {
  const {placeholderForm, ready, setReady} = props

  const [message, setMessage] = React.useState("この写真には何が映っていますか?")
  const [role, setRole] = React.useState("user")
  const [doTranslate, setDoTranslate] = React.useState(true)

  return (
    <Stack direction="column" spacing={2}>
      <MessageForm message={message} setMessage={setMessage} placeholder={placeholderForm} />
      {/*<RoleRadio role={role} setRole={setRole} />*/}
      <Stack direction="row" spacing={2}>
        <TranslateSwitch doTranslate={doTranslate} setDoTranslate={setDoTranslate} />
        <AddContextButton role={role} message={message} doTranslate={doTranslate} ready={ready} setReady={setReady}/>
        <DeleteContentButton ready={ready} setReady={setReady}/>
      </Stack>
    </Stack>
  )
}