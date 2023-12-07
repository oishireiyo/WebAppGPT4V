import React from 'react'
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
    <>
      <MessageForm message={question} setMessage={setQuestion} placeholder={placeholderForm} />
      <RoleRadio role={role} setRole={setRole} />
      <div className='flex space-x-2'>
        <div className='flex-none'>
          <TranslateSwitch doTranslate={doTranslate} setDoTranslate={setDoTranslate} />
        </div>
        <div className='flex-none'>
          <AddContextButton role={role} message={question} doTranslate={doTranslate} ready={ready} setReady={setReady}/>
        </div>
        <div className='flex-none'>
          <DeleteContentButton ready={ready} setReady={setReady}/>
        </div>
      </div>
    </>
  )
}