import React from 'react'
import Stack from '@mui/material/Stack'
import MessageForm from '../atoms/MessageForm'
import RoleRadio from '../atoms/RoleRadio'
import TranslateSwitch from '../atoms/TranslateSwitch'
import AddContextButton from '../atoms/AddContextButton'
import DeleteContentButton from '../atoms/DeleteContextButton'

export default function MessageControl(props) {
  const {question, setQuestion, placeholderForm, ready, setReady} = props

  const [role, setRole] = React.useState("user")
  const [doTranslate, setDoTranslate] = React.useState(true)

  return (
    <Stack direction="column" spacing={2}>
      <MessageForm message={question} setMessage={setQuestion} placeholder={placeholderForm} />
      <RoleRadio role={role} setRole={setRole} />
      <Stack direction="row" spacing={2}>
        <TranslateSwitch doTranslate={doTranslate} setDoTranslate={setDoTranslate} />
        <AddContextButton role={role} message={question} doTranslate={doTranslate} ready={ready} setReady={setReady}/>
        <DeleteContentButton ready={ready} setReady={setReady}/>
      </Stack>
    </Stack>
  )
}